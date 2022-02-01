import React from "react";
import './Button.css';

const Button = (props) => {
  return <button className="btn">{props.btn}</button>;
};

export default Button;
