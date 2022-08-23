import React from "react";
import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import "./authentification.route.style.scss";
const Authentification = () => {
  return (
    <div className="authentification-route-container">
      {" "}
      <h2>AUTHENTIFICATION</h2>
      <div className="auth-boxes-container">
        {" "}
        <Signin />
        <SignUp />
      </div>
    </div>
  );
};

export default Authentification;
