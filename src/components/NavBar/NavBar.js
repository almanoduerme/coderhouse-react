import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { GoThreeBars, GoX } from "react-icons/go";
import NavBarMobile from "./NavBarMobile";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

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
        <NavLink to="/" className="logo-container">
          <span className="logo">SKAJDLASJDLKASJDLK INDUMENTARIA</span>
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
                <NavLink to={link.path} className="link">
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink to="/cart" className="link">
                <CartWidget />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {isOpen ? <NavBarMobile /> : null}
    </>
  );
};

export default NavBar;
