import React from "react";
import './Button.css';

const Button = ({type, name, margin, backgroundColor, colorText, handleClick, widthButton, disabled }) => {
  return <button type={type} className="btn" style={{disabled, margin, backgroundColor: backgroundColor, color: colorText, width: widthButton}} onClick={handleClick}>{name}</button>;
};

export default Button;