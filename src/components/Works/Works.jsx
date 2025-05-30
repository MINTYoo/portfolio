import React from "react";
import "./works.css";
import parserImage from "../../assets/projects/Parser.PNG";
import triviaImage from "../../assets/projects/TriviaHomeScreenCapture.PNG";
import { useNavigate } from "react-router-dom";

export const Works = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Parser Project",
      image: parserImage,
      description: "Advanced text processing implementation",
    },
    {
      id: 2,
      title: "Trivia Game",
      image: triviaImage,
      description: "Interactive knowledge testing application",
    },
  ];

  return (
    <div id="Portfolio" className="works-container">
      <h1>My Recent Work</h1>
      <div className="works-list-container">
        {projects.map((project) => (
          <div key={project.id} className="works-item">
            <img src={project.image} alt={project.title} />
            <div className="works-item-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className="view-details-btn"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
