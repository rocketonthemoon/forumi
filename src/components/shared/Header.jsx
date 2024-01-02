import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>
        <Link to="/">Forumi</Link>
      </h1>
      <div>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
