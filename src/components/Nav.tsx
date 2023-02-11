import React from "react";
import "./componant.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="logo">
          <span>React</span> Ecom
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link active">
                <NavLink to="/" className="text-decoration-none">
                  Home
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link active">
              <NavLink to="/" className="text-decoration-none">
                About
              </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="nav-link active" id="navbarDropdown">
                <NavLink to="/Product" className="text-decoration-none">
                  Products
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link active">
                <NavLink to="/" className="text-decoration-none">
                  Contact
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

<div className="main">
  <nav>
    <div className="logo">
      <span>React</span> Ecom
    </div>
    <div className="product-list">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Product</li>
        <li>Contact</li>
        <li>
          <AiOutlineShoppingCart />
        </li>
      </ul>
    </div>
  </nav>
</div>;
