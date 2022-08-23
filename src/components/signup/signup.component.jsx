import React, { useState } from "react";
import {
  createNewUserFromSignup,
  handleSignupProcess,
} from "../../utils/firebase.js";
import Button from "../button/button.component";
import FormBlock from "../form-block/form-block.component.jsx";
import "./signup.style.scss";

const SignUp = () => {
  const defaultSignupForm = {
    displayName: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  const [signupForm, setSignupForm] = useState(defaultSignupForm);
  const { displayName, email, password, passwordConf } = signupForm;

  const formChangeHandler = ({ target }) => {
    const { value, name } = target;
    setSignupForm({ ...signupForm, [name]: value });
  };
  const resetForm = () => {
    setSignupForm(defaultSignupForm);
  };

  const signUpSubmited = async (e) => {
    e.preventDefault();
    const result = await handleSignupProcess(signupForm);
    return result ? resetForm() : result;
  };

  return (
    <div className="signup-container">
      <h3>SignUp</h3>
      <form onSubmit={signUpSubmited}>
        <FormBlock
          label="display Name"
          formChangeHandler={formChangeHandler}
          type="text"
          placeholder="Your name"
          value={displayName}
          name="displayName"
        />
        <FormBlock
          label="Email"
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
        <FormBlock
          label="password confirmation"
          formChangeHandler={formChangeHandler}
          type="password"
          placeholder="Your password confirmation"
          value={passwordConf}
          name="passwordConf"
        />

        {/* <div className="form-block">
          <label>email</label>
          <br />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            name="email"
            onChange={formChangeHandler}
          />
        </div>
        <div className="form-block">
          <label>password</label>
          <br />
          <input
            type="password"
            placeholder="Your password"
            value={password}
            name="password"
            onChange={formChangeHandler}
          />
        </div>
        <div className="form-block">
          <label>password confirmation</label>
          <br />
          <input
            type="password"
            placeholder="Your password confirmation"
            value={passwordConf}
            name="passwordConf"
            onChange={formChangeHandler}
          />
        </div> */}
        <div className="signin-buttons-container">
          <Button buttonType="inverted" type="submit">
            SIGNUP
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
