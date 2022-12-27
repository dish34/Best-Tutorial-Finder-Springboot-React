import { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Tutorials from "./Tutorials";
import './css/skills.css';

function Skills() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/skills")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSkills(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
      <div className="container my-5">
      <div className="input-group">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" className="btn btn-outline-primary">search</button>
      </div>
      </div>
    
        <div className="container-fluid">
        {/* <Router> */}
          <div className="row">
          {skills.map(skill => (
            <div key={skill.id} className="col-4 skill-container">
                
                  <div className="card h-120 border border-primary my-2 skill-img">
                  <Link to={`/tutorials/${skill.name}`}>
                      {/* <img height="50px" width="50px" src="../images/JAVA.png" alt="" />  */}
                      <img height="50px" width="50px" src={`../images/${skill.name}.png`} alt="" /> 
                      <span className="card-body text-center"> {skill.name} </span>  
                  </Link>
                  </div>
               
            </div>
            
          ))}
          {/* <Switch>
          <Route path="tutorials/:id" component={Tutorials} />
          </Switch> */}
          </div>
          {/* </Router> */}
        </div>
      </div>
    );
  }

}

export default Skills;
