import React from "react";
import { Link } from "react-router-dom";
import InvertLogo from "../../assets/images/invert-logo.png";

function Header() {
  return (
    <div className="container flex justify-between max-w-full p-3">
      <h1 className="text-4xl font-bold text-gray">
        <Link to="/">
          <img
            src={InvertLogo}
            alt="inverted logo of the forum"
            className="w-1/3 sm:w-1/4 md:w-1/3"
          />
        </Link>
      </h1>
      <ul className="flex items-center justify-between flex-grow font-medium max-w-1/2 sm:max-w-full">
        <li className="px-6 py-2 rounded-lg hover:ring-2 hover:cursor-pointer ring-pink-500">
          <Link to="/home">Home</Link>
        </li>
        <li className="px-6 py-2 rounded-lg hover:ring-2 hover:cursor-pointer ring-pink-500">
          <Link to="/about">About</Link>
        </li>
        <li className="px-6 py-2 rounded-lg hover:ring-2 hover:cursor-pointer ring-pink-500">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="bg-pink-500 px-6 py-2 rounded-lg text-white hover:ring-2 hover:cursor-pointer ring-pink-500">
          <Link to="/login">Login</Link>
        </li>
        <li className="bg-pink-500 px-6 py-2 rounded-lg text-white hover:ring-2 hover:cursor-pointer ring-pink-500">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
