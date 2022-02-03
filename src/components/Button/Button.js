import React from "react";
import './Button.css';

const Button = ({name, backgroundColor, colorText, handleClick }) => {
  return <button className="btn" style={{backgroundColor: backgroundColor, color: colorText}} onClick={handleClick}>{name}</button>;
};

export default Button;
