import React from "react";
import { Link } from "react-router-dom";
import social1 from "../../assets/images/social/social1.png";
import social2 from "../../assets/images/social/social2.png";
import social3 from "../../assets/images/social/social3.png";
import social4 from "../../assets/images/social/social4.png";
import social5 from "../../assets/images/social/social5.png";

function Footer() {
  return (
    <footer className=" h-[20vh] flex items-center justify-around">
      <div className="flex flex-col items-center justify-center w-1/2">
        <p className="font-bold">&copy; 2024 Forumi.</p>
        <ul className="flex items-center justify-around space-x-3">
          <li className="w-5">
            <a href="https://facebook.com">
              <img src={social1} alt="facebook" />
            </a>
          </li>
          <li className="w-5">
            <a href="https://x.com">
              <img src={social2} alt="twitter / x" />
            </a>
          </li>
          <li className="w-5">
            <a href="https://instagram.com">
              <img src={social3} alt="instagram" />
            </a>
          </li>
          <li className="w-5">
            <a href="https://reddit.com">
              <img src={social4} alt="reddit" />
            </a>
          </li>
          <li className="w-10">
            <a href="https://quora.com">
              <img src={social5} alt="quora" />
            </a>
          </li>
        </ul>
      </div>

      <ul className="w-1/2 flex flex-col items-center justify-center font-bold space-y-3">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="contact">Contacts</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="register">Join Now</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
