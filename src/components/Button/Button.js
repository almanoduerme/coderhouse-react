import React from "react";
import './Button.css';

const Button = ({name, backgroundColor, colorText, handleClick, widthButton }) => {
  return <button className="btn" style={{backgroundColor: backgroundColor, color: colorText, width: widthButton}} onClick={handleClick}>{name}</button>;
};

export default Button;
