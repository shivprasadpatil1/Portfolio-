import React from "react";
import ProjectCard from "./ProjectCard";  
import "../../components/Projects/Projects.css";
import projectEcommerce from '../../assets/e-commerce.jpg'
import projectPortfolio from '../../assets/portfolio.jpg'
import projectCodewonders from '../../assets/codewonders.png'

function ProjectsData() {
  const projectData = [
    {
      image: projectEcommerce,
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce application with authentication, product management, and payment integration.",
      techStack: ["MongoDB", "Express.js", "Node.js", "React.js", "Bootstrap"],
      isLive: false,
      githubLink: "https://github.com/shivprasadpatil1/E-Commerce.git",
    },
    {
      image: projectPortfolio,
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and contact information.",
      techStack: ["React", "Bootstrap", "css"],
      liveLink: "https://example.comhttps://wondrous-pie-f5f764.netlify.app/",
      githubLink: "https://github.com/shivprasadpatil1/Portfolio-.git",
    },
    
    {
      image: projectCodewonders,
      title: "Code Wonders",
      description: "Code Wonders is a full-stack web application developed as a company project, featuring role-based access, CRUD operations, and API-driven architecture",
      techStack: ["MongoDB", "Express.js", "Node.js", "React.js", "Bootstrap"],
      isLive: false,
      githubLink: "https://github.com/shivprasadpatil1/CodeWonders.git",
    },

  ];

  return (
    <div id="projects">
     <div className="projects-section container">
      <div className="row mt-4">
        <h2 className=" text-white  d-flex justify-content-center text-uppercase">
              MY <span style={{ color: "#5a9494ff" }}>Projects</span>
            </h2>
             <p className="paragraph text-light text-center mt-3">
            I am a passionate web developer who loves building creative and
            modern applications. Always eager to learn new technologies and
            improve my skills.
          </p>
          <div className="projects-wrapper mt-4">
        {projectData.map((p, index) => (
        
            <ProjectCard key={index} {...p} />
         
        ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectsData;
