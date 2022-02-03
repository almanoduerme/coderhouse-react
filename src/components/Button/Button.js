import React from "react";
import './Button.css';

const Button = ({name, backgroundColor, colorText }) => {
  return <button className="btn" style={{backgroundColor: backgroundColor, color: colorText}}>{name}</button>;
};

export default Button;
