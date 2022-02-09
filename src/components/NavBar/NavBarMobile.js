import React from "react";
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBarMobile.css";

const NavBarMobile = () => {
  return (
    <ul className="aside">
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
        <Button backgroundColor={"white"} colorText="black" name="Sing Up!" />
      </li>
      <CartWidget />
    </ul>
  );
};

export default NavBarMobile;
