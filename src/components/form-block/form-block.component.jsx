import React from "react";
import { FormBlockContainer } from "./form-block.style";

const FormBlock = ({ label, formChangeHandler, ...otherProps }) => {
  return (
    <FormBlockContainer>
      <label>{label}</label>
      <br />
      <input {...otherProps} onChange={formChangeHandler} />
    </FormBlockContainer>
  );
};

export default FormBlock;
