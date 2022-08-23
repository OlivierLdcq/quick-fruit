import React from "react";
import "./button.style.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={buttonType} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
