import React, { useState, useEffect } from "react";
import "../styling/Header.css";
import picture from "../assets/Ruben_cerda_portrait.JPG";
const prompts = ["a Developer", "a Designer", "an Innovator", "a Creator"];

export const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % prompts.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="About" className="header-container">
      <div className="header-content">
        <h1>Hello👋 My name is</h1>
        <h2 className="fullname"> Ruben Cerda</h2>
        <h2>
          I'm <span className="animated-text">{prompts[index]}</span>
        </h2>
        <p>
          As a motivated student, I am eager to apply my skills to real-world
          challenges. I am open to learning new skills and expanding my current
          ones to contribute effectively to your team. I am committed to
          leveraging my abilities to seamlessly integrate into your team and
          contribute to its success.
        </p>
      </div>
      <div className="profile-img-container">
        <img src={picture} alt="Ruben Cerda" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
    </div>
  );
};
