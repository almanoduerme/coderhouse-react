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
        <SiLinkedin className="icon" />
        <SiGithub className="icon" />

        {/* Create link social link */}
      </div>
    </footer>
  );
};

export default Footer;
