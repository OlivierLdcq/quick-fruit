import React, { useState } from "react";
import Button from "../button/button.component";
import "./signin.style.scss";
import {
  handleGoogleSignIn,
  createUserInDataBase,
  signInWithEmailAndPasswordHandler,
} from "../../utils/firebase";
import FormBlock from "../form-block/form-block.component";

const Signin = () => {
  const defaultSigninForm = { email: "", password: "" };
  const [signinForm, setSigninForm] = useState(defaultSigninForm);
  const { email, password } = signinForm;

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPasswordHandler(email, password);
  };
  const signInWithGoogleGotClicked = async () => {
    const user = await handleGoogleSignIn();
    return createUserInDataBase(user);
  };
  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    let updatedForm = { ...signinForm, [name]: value };
    setSigninForm(updatedForm);
  };
  return (
    <div className="signin-container">
      <h3>SignIn</h3>
      <form onSubmit={handleSubmit}>
        <FormBlock
          label="email"
          formChangeHandler={formChangeHandler}
          type="email"
          placeholder="Your email"
          value={email}
          name="email"
        />
        <FormBlock
          label="password"
          formChangeHandler={formChangeHandler}
          type="password"
          placeholder="Your password"
          value={password}
          name="password"
        />

        <div className="signin-buttons-container">
          <Button buttonType="inverted" type="submit">
            SIGNIN
          </Button>
          <Button
            buttonType="google"
            type="button"
            onClick={signInWithGoogleGotClicked}
          >
            SIGNIN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
