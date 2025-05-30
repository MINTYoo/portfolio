import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div id="Contact" className="contact-container">
      <h1>Let's Connect</h1>
      <p>
        Feel free to reach out to me via email or connect with me on LinkedIn.
      </p>
      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:cerdaruben01@gmail.com">cerdaruben01@gmail.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ruben-cerda-382a2024a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ruben-cerda-382a2024a
          </a>
        </p>
      </div>
      {/* You can add a form, email address, social links, etc. here */}
    </div>
  );
};
