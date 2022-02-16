import React from "react";
import './Footer.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p>Copyright {year} &copy; - Nahuel Gómez</p>
    </footer>
  );
};

export default Footer;
