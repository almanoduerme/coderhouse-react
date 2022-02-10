import React, { useState } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { GoThreeBars, GoX } from "react-icons/go";
import Button from "../Button/Button";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img className="logo" src="./img/logo2.png" alt="logo" />
          <span> TRUSTINESS STORE</span>
        </div>

        {isOpen ? (
          <GoX className="bars" onClick={toggleMenu} />
        ) : (
          <GoThreeBars className="bars NavBarMobile" onClick={toggleMenu} />
        )}

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
              <Button
                backgroundColor={"white"}
                colorText="black"
                name="Sing Up!"
              />
            </li>
            <CartWidget />
          </ul>
        </nav>
      </header>
      {isOpen ? <NavBarMobile /> : null}
    </>
  );
};

export default NavBar;
