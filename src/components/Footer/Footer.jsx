import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-logo"></div>
      <div className="footer-copyright">
        <p>©2024 Ruben Cerda, All Rights Reserved</p>
        <ul className="footer-social-media">
          <li>
            <a
              href="cerdaruben01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/ruben-cerda-382a2024a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
