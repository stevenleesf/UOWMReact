import React from "react";
import AuthService from "../services/auth-service";
import "./Login.css"
import { Button } from "./Button";
import { Link } from 'react-router-dom'

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="auth-container">
      <header className="jumbotron"><strong>Profile:</strong>
        <p>
          {currentUser.username}
        </p>
      </header>
      <br></br>
      <p>
        <strong>Token:<br></br></strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <br></br>
      <p>
        <strong>Id:<br></br></strong> {currentUser.id}
      </p>
      <br></br>
      <p>
        <strong>Email:<br></br></strong> {currentUser.email}
      </p>
      <br></br>
      <strong>Authorities:<br></br></strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>

      <div className="form-group">



        <Link to={`/update/${currentUser.id}`}  >
          <Button buttonSize='btn--wide' buttonColor='blue' >Edit Info</Button>
        </Link>
      </div>

    </div>
  );
};

export default Profile;