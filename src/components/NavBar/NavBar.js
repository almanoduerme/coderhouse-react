import React, { useState } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { GoThreeBars, GoX } from "react-icons/go";
import NavBarMobile from "./NavBarMobile";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Menu de Links
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="header">
        <NavLink to="/">
          <div className="header-logo">
            <img className="logo" src="./img/logo2.png" alt="logo" />
            <span> TRUSTINESS STORE</span>
          </div>
        </NavLink>

        {isOpen ? (
          <GoX className="bars" onClick={toggleMenu} />
        ) : (
          <GoThreeBars className="bars NavBarMobile" onClick={toggleMenu} />
        )}

        <nav className="navbar">
          <ul className="nav-links">
            {menuLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="link"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <CartWidget />
            </li>
          </ul>
        </nav>
      </header>
      {isOpen ? <NavBarMobile /> : null}
    </>
  );
};

export default NavBar;
