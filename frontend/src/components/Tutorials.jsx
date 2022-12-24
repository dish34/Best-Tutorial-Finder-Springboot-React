import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const myComponentStyle = {
    width: '18rem'
 }

function Tutorials ({ match }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tutorials, settutorials] = useState([]);
    const {id} = match.params;
    console.log(match.params.id)

    

    useEffect(() => {
      fetch(`http://localhost:8080/tutorials/${id}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            settutorials(result);
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
            {tutorials.map(tutorial => (
              <div key={tutorial.id} class="col-12">
                    <div class="card h-120 border border-primary my-2">
                      <div class="card-body"> 
                      <h5 class="card-title">{tutorial.name} </h5>
                      <p class="card-text">{tutorial.provider}</p>
                      </div> 
                      <div class="card-body">
                            <a target="_blank" href={tutorial.url} class="card-link">Card link</a>
                       </div>
                    </div>
                  
              </div>
              
            ))}
            </div>
          </div>
        </div>
      );
    }
}
 
export default Tutorials;