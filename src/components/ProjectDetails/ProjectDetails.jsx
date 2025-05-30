import React from "react";
import "./projectDetails.css";
import { useNavigate } from "react-router-dom";
import parserImage from "../../assets/projects/Parser.PNG";
import triviaImage from "../../assets/projects/TriviaHomeScreenCapture.PNG";

export const ProjectDetails = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const projects = [
    {
      id: 1,
      title: "Parser Project",
      image: parserImage,
      description:
        "A sophisticated parser implementation that demonstrates advanced text processing capabilities. This project showcases efficient data parsing techniques and robust error handling.",
      technologies: ["Python", "Regular Expressions", "Data Structures"],
      features: [
        "Advanced text parsing capabilities",
        "Robust error handling",
        "Efficient data processing",
        "Clean and maintainable code structure",
      ],
    },
    {
      id: 2,
      title: "Trivia Game",
      image: triviaImage,
      description:
        "An interactive trivia game that tests users' knowledge across various categories. The game features a user-friendly interface and engaging gameplay mechanics.",
      technologies: ["React", "JavaScript", "CSS", "API Integration"],
      features: [
        "Multiple question categories",
        "Score tracking system",
        "Responsive design",
        "Real-time feedback",
      ],
    },
  ];

  return (
    <div className="project-details-container">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
      <h1>Project Details</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                <h3>Technologies Used:</h3>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="features">
                <h3>Key Features:</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
