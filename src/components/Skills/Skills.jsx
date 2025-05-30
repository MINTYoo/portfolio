import React from "react";
import "./skills.css";

export const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "fab fa-react" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Java", icon: "fab fa-java" },
        { name: "SQL", icon: "fas fa-database" },
      ],
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "AWS", icon: "fab fa-aws" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "VS Code", icon: "fas fa-code" },
      ],
    },
  ];

  return (
    <section id="Skills" className="skills-section">
      <div className="skills-container">
        <h1>My Skills</h1>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h2>{category.category}</h2>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
