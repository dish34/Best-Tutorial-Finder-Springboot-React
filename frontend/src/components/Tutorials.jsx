import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SubmitTutorial from './SumitTutorial';
import './css/tutorials.css';

const myComponentStyle = {
    width: '18rem'
 }

function Tutorials ({ match }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tutorials, settutorials] = useState([]);
    const {id} = match.params;

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
    }
    else if(tutorials.length === 0) {
      return (
        <div>
          <div class="container my-5">
            <div class="input-group">
             <h2 id="no-tutorial-container">
             <span>OOPS!</span> <span className='path' fill="white" stroke="black" stroke-width="4" >No Tutorials Found!...  </span><span className="no-tutorial">😓</span>
             </h2>
             <h5 id="add-tutorial">
             <SubmitTutorial tutorialId={id}></SubmitTutorial>
             </h5>
            </div>
          </div>
            <div>
             
            </div>
        </div>
      )
    }
     else {
      return (
        <div>
        <div class="container my-5">
        <div class="input-group">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">search</button>
          <SubmitTutorial tutorialId={id}></SubmitTutorial>
        </div>
        </div>
          <div class="container-fluid">
            <div class="row">
            {tutorials.map(tutorial => (
              <div key={tutorial.id} class="col-5 my-2 tutorial-container">
                <a target="_blank" href={tutorial.url}>
                    <div class="card h-100 border border-primary my-2">
                      <div class="card-body"> 
                      <h5 class="card-title">{tutorial.name} </h5>
                      <div>
                        <span class="card-text card-paid">{tutorial.provider}</span>
                        <span class="card-text card-paid">{tutorial.paid? <>Paid</>:<>Free</>}</span>
                      </div>
                      
                      </div> 
                      <div class="card-body">
                            <a target="_blank" href={tutorial.url} class="card-link">tutorial link</a>
                       </div>
                    </div>
                    </a>
              </div>
             
            ))}
            </div>
          </div>
        </div>
      );
    }
}
 
export default Tutorials;