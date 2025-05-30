import React from "react";
import "./services.css";

export const Services = () => {
  return (
    <div id="Services" className="services-container">
      <div className="services-list-container">
        {/* Description */}
        <div className="services-description-container">
          <h1>
            My <br />
            <span>Expertise</span>
          </h1>
          <p>
            I'm a developer with a strong computer science background and
            hands-on experience in full-stack development, cloud infrastructure,
            and systems engineering. I enjoy solving real-world problems through
            scalable and efficient technology.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("Contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Connect
          </button>
        </div>

        {/* Service Items */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Full-Stack Development</h3>
              <p>
                Skilled in building responsive web and mobile applications using
                React, React Native, Node.js, Flask, fastapi, and Tailwind CSS.
                Experienced with RESTful APIs and modern design patterns.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-cloud"></i>
            <div className="item-desc">
              <h3>Cloud & DevOps</h3>
              <p>
                Proficient with AWS (Amplify, Cognito, EC2, S3), Azure, and
                Google Cloud. Experienced in infrastructure automation using
                Terraform, containerization with Docker, and implementing CI/CD
                pipelines for efficient deployments.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-microchip"></i>
            <div className="item-desc">
              <h3>Systems & Data Engineering</h3>
              <p>
                Background in systems programming with C++ and Golang, and
                experienced in data modeling and querying with SQL. Skilled in
                building efficient backend systems and handling low-level
                application logic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
