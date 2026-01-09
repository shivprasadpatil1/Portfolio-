import React from "react";
import "./Skills.css";
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.webp'
import next from '../../assets/next.png'
import react from '../../assets/react.svg'
import bootstrap from '../../assets/bootstrap.png'
import git from '../../assets/git.png'
import vs from '../../assets/vs.png'
import tailwind from '../../assets/tailwind.svg'
import typescript from '../../assets/typescript.png'
import postman from '../../assets/postman.png'
import nodejs from '../../assets/nodejs.png'
import express from '../../assets/express.png'
import mongodb from '../../assets/mongodb.png'

function Skills() {

  const skills = [
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css },
    { name: "JavaScript", icon: js },
    { name: "TypeScript", icon: typescript },
    { name: "React", icon: react },
    { name: "Next.js", icon: next },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Tailwind", icon: tailwind },
    { name: "Node.js", icon: nodejs },
    { name: "Express.js", icon: express },
    { name: "MongoDB", icon: mongodb },
    { name: "Git", icon: git },
    { name: "VS Code", icon: vs },
    { name: "Postman", icon: postman }

  ];

  return (
    <div id="skills" className="skills-section">
      <div className="skills-grid-container">
        <h2 className="skills-title">My <span className="highlight">Skills</span> & Technologies</h2>
            <p className="text-para text-center my-2 mb-5">
            Here are the technologies I work with.
          </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-grid-item">
              {skill.icon ? (
                <>
                  <img src={skill.icon} alt={skill.name} className="skill-grid-icon" />
                  <p className="skill-grid-name">{skill.name}</p>
                </>
              ) : (
                <div className="empty-cell"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;