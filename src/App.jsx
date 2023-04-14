import React, { useState } from "react";
import UserProfile from "./UserProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the name and age data
  };

  return (
    <div>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-6">
            <div class="card">
              <div class="card-header" id = "card-head1">
                <h3>INPUT</h3>
              </div>

              <div class="card-body" id = "card-body1">
                <form onSubmit={handleSubmit}>
                  <div className="Name">
                    <h6>Name</h6>
                    <label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                  </div>
                  <h6>Age</h6>
                  <label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(parseInt(e.target.value))}
                    />
                  </label>
                  {/* <button type="submit">Submit</button> */}
                </form>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className = "card-2">
            <div class="card-header" id = "card-head2">
                <h3>OUTPUT</h3>
              </div>
              <div className = "card-body" id = "card-body2">
            <UserProfile name={name} age={age} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
