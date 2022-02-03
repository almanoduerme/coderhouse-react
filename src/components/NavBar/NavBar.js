import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
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
        <ul className="nav-links">
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
            <Button backgroundColor={'white'} colorText='black'  name="Sing Up!" />
          </li>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
