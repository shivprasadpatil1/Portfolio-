import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import resume from "../../assets/myResume.pdf";
import { Link } from "react-scroll";

function Home() {
  return (
    <section id="home" className="container-fluid min-vh-100 d-flex align-items-center position-relative">
      <div className="row w-100 align-items-center">

        {/* LEFT SECTION */}
        <div className="lefthome p-lg-5 col-12 col-md-6 d-flex justify-content-center justify-content-md-start text-center text-md-start">
          <div className="homedetails">
            <h2 className="line1">Hi, THERE!</h2>

            <h1 className="line1">
              I'M <span className="line2">Shivprasad Patil</span>
            </h1>

            <div className="line3 mt-2">
              <Typewriter
                words={[
                  "WEB DEVELOPER",
                  "SOFTWARE DEVELOPER",
                  "FRONTEND DEVELOPER",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>

            <div className="button-wrapper d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <a
                href={resume}
                download
                className="button-resume text-decoration-none"
              >
                Download CV
              </a>

              <Link
                to="projects"
                smooth={true}
                duration={400}
                className="button-project text-decoration-none"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="righthome col-12 col-md-6 d-flex justify-content-center mt-4 mt-md-0">
          <div className="code-box">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="filename">Portfolio.jsx</span>
            </div>

            <pre className="mb-0">
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
    </section>
  );
}

export default Home;
