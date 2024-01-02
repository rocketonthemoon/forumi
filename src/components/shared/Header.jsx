import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InvertLogo from "../../assets/images/logo/invert-logo.png";
import { GlobalContext } from "../../context/Global";

function Header() {
  const { rendered } = React.useContext(GlobalContext);
  const [isHomepage, setIsHomepage] = React.useState(false);
  useEffect(() => {
    if (rendered == "homepage") {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }
  }, [rendered]);

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
      <ul className="flex items-center justify-between space-x-4 font-medium max-w-1/2 sm:max-w-full">
        {!isHomepage && (
          <>
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
          </>
        )}
        {isHomepage && (
          <li className="bg-pink-500 px-6 py-2 rounded-lg text-white hover:ring-2 hover:cursor-pointer ring-pink-500">
            <Link to="/register">Join Now</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
