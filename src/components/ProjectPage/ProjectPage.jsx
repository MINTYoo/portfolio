import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./projectPage.css";

export const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: "1",
      title: "Parser Project",
      image: "/src/assets/projects/Parser.PNG",
      description:
        "A sophisticated parser implementation that demonstrates advanced text processing capabilities. This project showcases efficient data parsing techniques and robust error handling.",
      technologies: ["Python", "Regular Expressions", "Data Structures"],
      features: [
        "Advanced text parsing capabilities",
        "Robust error handling",
        "Efficient data processing",
        "Clean and maintainable code structure",
      ],
      longDescription: `This project demonstrates my expertise in text processing and data manipulation. 
      The parser was designed to handle complex input formats and convert them into structured data. 
      Key challenges included implementing efficient parsing algorithms and ensuring robust error handling 
      for various edge cases. The project showcases my ability to write clean, maintainable code while 
      solving complex problems.`,
    },
    {
      id: "2",
      title: "Trivia Game",
      image: "/src/assets/projects/TriviaHomeScreenCapture.PNG",
      description:
        "An interactive trivia game that tests users' knowledge across various categories. The game features a user-friendly interface and engaging gameplay mechanics.",
      technologies: ["React", "JavaScript", "CSS", "API Integration"],
      features: [
        "Multiple question categories",
        "Score tracking system",
        "Responsive design",
        "Real-time feedback",
      ],
      longDescription: `This interactive trivia game was developed to showcase my front-end development skills 
      and ability to create engaging user experiences. The game features a modern, responsive design and 
      integrates with external APIs to fetch questions. Players can track their scores, compete with friends, 
      and learn new facts across various categories. The project demonstrates my proficiency in React and 
      modern web development practices.`,
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="project-page-container">
        <h1>Project not found</h1>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="project-page-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Projects
      </button>

      <div className="project-header">
        <h1>{project.title}</h1>
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      </div>

      <div className="project-content">
        <section className="project-description">
          <h2>Overview</h2>
          <p>{project.longDescription}</p>
        </section>

        <section className="project-technologies">
          <h2>Technologies Used</h2>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>

        <section className="project-features">
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
