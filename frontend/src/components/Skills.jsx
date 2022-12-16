import { useState } from 'react';
import { useEffect } from 'react';

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
      <div class="container my-5">
      <div class="input-group">
        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" class="btn btn-outline-primary">search</button>
      </div>
      </div>
        <div class="container-fluid">
          <div class="row">
          {skills.map(skill => (
            <div key={skill.id} class="col-4">
              <div class="card h-120 border border-primary my-2">
                <div class="card-body text-center"> {skill.name} </div> 
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
