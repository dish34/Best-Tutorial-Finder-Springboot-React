import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SubmitTutorial from "./SumitTutorial";
import "./css/tutorials.css";

const myComponentStyle = {
  width: "18rem",
};

function Tutorials({ match }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tutorials, setTutorials] = useState([]);
  const { id } = match.params;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/tutorials/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTutorials(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (tutorials.length === 0) {
    return (
      <div>
        <div className="container my-5">
          <div className="input-group">
            <h2 id="no-tutorial-container">
              <span>OOPS!</span>{" "}
              <span
                classNameName="path"
                fill="white"
                stroke="black"
                stroke-width="4"
              >
                No Tutorials Found!...{" "}
              </span>
              <span classNameName="no-tutorial">😓</span>
            </h2>
            <h5 id="add-tutorial">
              <SubmitTutorial tutorialId={id}></SubmitTutorial>
            </h5>
          </div>
        </div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container my-5">
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            {/* <button type="button" className="btn btn-outline-primary">search</button> */}
            <SubmitTutorial tutorialId={id}></SubmitTutorial>
          </div>
        </div>
        <div className="d-flex border border-1">
          <div className="filter card-color">
            <div className="filter-by">Filter By</div>
            <div className="filter-type">
              <p>Type Of Tutorial</p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="PAID"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  PAID
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="FREE"
                />
                <label class="form-check-label" for="exampleRadios2">
                  FREE
                </label>
              </div>
            </div>
          </div>
          <div className="d-inlineblock">
            <div className="container-fluid">
              <div className="row">
                {tutorials.map((tutorial) => (
                  <div
                    key={tutorial.id}
                    className="col-10 my-2 tutorial-container"
                  >
                    <a target="_blank" href={tutorial.url}>
                      <div className="card border border-1 card-color my-2">
                        <div className="card-body">
                          <h5 className="card-title">{tutorial.name} </h5>
                          <div>
                            <span className="card-text card-paid">
                              {tutorial.provider}
                            </span>
                            <span className="card-text card-paid">
                              {tutorial.paid ? <>Paid</> : <>Free</>}
                            </span>
                          </div>
                        </div>
                        <div className="card-body">
                          <div
                            target="_blank"
                            href={tutorial.url}
                            className="card-link"
                          >
                            tutorial link
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorials;
