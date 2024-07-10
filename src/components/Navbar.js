import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar">
      <h1 class="nav-title">
        <Link to="/">Choc4US</Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/info">Our Chocolate</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/admin">Management</Link>
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
