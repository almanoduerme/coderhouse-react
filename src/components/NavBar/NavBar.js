import React from "react";
import "./NavBar.css";
import { GoThreeBars } from "react-icons/go";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" src="./img/logo2.png" alt="logo" />
        <span> TRUSTINESS STORE</span>
      </div>
      <GoThreeBars className="bars" />
      <nav className="navbar">
        <ul className="navbar-nav">
          <li>
            <a className="link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="link" href="/">
              Products
            </a>
          </li>
          <li>
            <a className="link" href="/">
              About us
            </a>
          </li>
          <li>
            <a className="link" href="/">
              Contact
            </a>
          </li>
          <li>
            <Button btn='Sing up!' />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
