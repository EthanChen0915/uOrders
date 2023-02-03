import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import { BsCart } from "react-icons/bs";

function Navigation() {
  return (
    <div className="navigation__container">
      <div className="navigation__leftContainer">
        <a href="https://www.uorder.io/home">
          <span className="navigation__leftContainer__Logo">uOrder</span>
        </a>
        <Link to="/signin">Sign in</Link>
      </div>
      <div className="navigation__rightContainer">
        <div className="navigation__rightContainer__cart">
          <BsCart />
          <span className="navigation__rightContainer_cart_quantity">1</span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
