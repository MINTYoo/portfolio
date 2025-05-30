import React from "react";
import "./services.css";
export const Services = () => {
  return (
    <div id="Services" className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-description-container">
          <h1>
            My <br />
            <span>Services</span>
          </h1>
          <p>
            As a versatile developer with a strong foundation in computer
            science, I bring expertise across multiple domains. My technical
            skills span from full-stack development to advanced data science and
            cloud architecture. I'm passionate about creating efficient,
            scalable solutions while staying current with emerging technologies.
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
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
                Full-stack development expertise with React, Node.js, and modern
                JavaScript frameworks. Experience in building responsive,
                performant web applications with a focus on user experience and
                clean code architecture.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-brain"></i>
            <div className="item-desc">
              <h3>Data Science & Machine Learning</h3>
              <p>
                Proficient in data analysis, machine learning, and AI
                implementation. Experience with predictive modeling, natural
                language processing, and computer vision. Skilled in using
                Python, TensorFlow, and scikit-learn for developing intelligent
                solutions.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-cloud"></i>
            <div className="item-desc">
              <h3>Cloud Services & DevOps</h3>
              <p>
                Expertise in cloud platforms (AWS, Azure) and DevOps practices.
                Experience with containerization, CI/CD pipelines, and
                infrastructure as code. Skilled in implementing scalable,
                secure, and cost-effective cloud solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
