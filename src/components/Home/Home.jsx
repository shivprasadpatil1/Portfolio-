import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import resume from '../../assets/myResume.pdf'
import { Link } from "react-scroll";

function Home() {
  return (
    <div id="home" className="container-fluid">
      <div className="row align-items-center min-vh-100">
        
        {/* Left Section */}
   <div className="lefthome col-md-6 d-flex justify-content-center align-items-center">
  <div className="homedetails">
    <div className="intro-text">
      <h2 className="line1">Hi, THERE!</h2>
      <h1 className="line1">I'M <span className="line2">Shivprasad Patil</span></h1>
    </div>

    <div className="line3">
      <Typewriter
        words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "FRONTEND DEVELOPER"]}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>

    <div className="button-wrapper mt-3">
  {/* Download Resume */}
  <a
    href={resume}
    download
    className="button-resume text-decoration-none"
  >
    Download CV
  </a>

  {/* Navigate to Projects */}
  <Link
    to="projects"
    smooth={true}
    duration={300}
    spy={true}
    className="button-project mx-3 text-decoration-none"
  >
    Projects
  </Link>
</div>

  </div>
</div>



        {/* Right Section */}
        <div className="righthome col-md-6 d-flex justify-content-center">
          <div className="code-box">
             <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="filename">Portfolio.jsx</span>
            </div>
            <pre>
              <code>{`
import React from 'react';

function Portfolio() {
  return (
    <div>
      <h1>Hello 👋</h1>
      <p>I'm a Frontend Developer 🚀</p>
    </div>
  );
}

export default Portfolio;
              `}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
