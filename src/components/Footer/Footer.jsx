import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-logo"></div>
      <div className="footer-contact-button">
        <Link to="Contact" smooth={true} duration={500}>
          <button className="btn primary">Let's Connect</button>
        </Link>
      </div>
      <div className="footer-copyright">
        <p>©2024 Ruben Cerda, All Rights Reserved</p>
        <ul className="footer-social-media">
          <li>
            <a
              href="https://www.youtube.com/channel/UCyuT4FGG3aFXKcGuueig2ug"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ruben_1249"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
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
