import React, { useState, useEffect } from "react";
import AuthService from "../services/TutorialService.js";
import { Button } from "./Button";



const Update = props => {

  const initialTutorialState = {
    id : props.match.params.id,
    username: "",
    email: "",
    
  };
  
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getTutorial = id => {
    AuthService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

 

  const updateTutorial = () => {
    
  
    
    
    AuthService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("The Information was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };



  return (
    <div>
      {currentTutorial ? (
        <div className="auth-container">
          <h4>Edit Information</h4>
          <form>
      
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={currentTutorial.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={currentTutorial.email}
                onChange={handleInputChange}
              />
            </div>

          
          </form>

          
          <div className="form-group"> 

          <Button
            type="submit"
            className="badge badge-success"
            onClick={updateTutorial}
            buttonSize='btn--wide' 
            buttonColor='blue'
          >
            Update
          </Button>
          <p>{message}</p>
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Update;