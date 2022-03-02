import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p>Copyright {year} &copy; - Nahuel Gómez</p>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/gomeznahuel/" target="blank">
        <SiLinkedin className="icon" /> </a>
        <a href="https://www.github.com/almanoduerme" target="blank"> 
        <SiGithub className="icon" /> </a>
      </div>
    </footer>
  );
};

export default Footer;
