import { useState } from "react";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { useMemo } from "react";
import Tutorials from "./Tutorials";
import "./css/skills.css";

function Skills() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [skills, setSkills] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/skills`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSkills(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const filteredSearchQuery = useMemo(() => {
    if (searchQuery.length === 0) {
      return skills;
    }
    const query = searchQuery.toLowerCase();
    return skills.filter((skill) =>
      skill.name.toLowerCase().includes(query)
    );
  }, [skills, searchQuery]);

  const formatSkillName = (name) => {
    if (name === 'C#')
      return 'CSHARP';
    return name.replace(/\s+/g, '_').toUpperCase();
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-md-9">
            <span className="fs-2 text-capitalize text-center text-md-left font-weight-bold text-secondary">Find the Best </span>
            <span className="fs-2 text-capitalize text-md-left font-weight-bold text-info">Programming Tutorial</span>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search "
              aria-label="Search"
              aria-describedby="search-addon"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {filteredSearchQuery.map((skill) => (
              <div key={skill.id} className="col-6 col-md-4 skill-container">
                <div className="card border my-2 skill-img">
                  <a href={`/tutorials/${formatSkillName(skill.name)}`}>
                    <div className="d-flex flex-wrap">
                      {/* <img height="50px" width="50px" src="../images/JAVA.png" alt="" />  */}
                      <div className="m-2 skill-img-container">
                        <img
                          height="50px"
                          width="50px"
                          src={`../images/${formatSkillName(skill.name)}.png`}
                          alt=""
                        />
                      </div>
                      <div className="m-2">
                        <span className=""> {skill.name} </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
