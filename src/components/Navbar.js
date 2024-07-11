import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-title">
        <Link to="/">Choc4US</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>

        <li>
          <Link to="/products">Our Chocolate</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
