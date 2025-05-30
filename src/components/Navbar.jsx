import React from "react";
import "../styling/Navbar.css";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div id="Home">
      <nav>
        <div className="nav-logo">
          <h1>RC</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="Home">
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="About">
                About
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Services">
                Services
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
