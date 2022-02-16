import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBarMobile.css";
import { NavLink } from "react-router-dom";

const NavBarMobile = () => {
  // Menu de Links
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="aside">
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
  );
};

export default NavBarMobile;
