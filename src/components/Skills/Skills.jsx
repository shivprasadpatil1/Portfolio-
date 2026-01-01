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


function Skills() {
  return (
    <div id="skills" className="skills-section">
      <div className="container pt-5">
        <div className="row mt-4 ">
          <h2 className="text-white text-center">My <span style={{ color: "#5a9494ff" }}>Skills</span></h2>
          <p className="text-light text-center my-2 mb-5">
            Here are the technologies I work with.
          </p>


     {/* Row 1 */}
        <div className="row mb-4 justify-content-center">
          <div className="col-4 col-md-2 mb-3">
            <img src={html} alt="HTML5" className="img-fluid skill-icon" />
          </div>
          <div className="col-4 col-md-2 mb-3">
            <img src={css} alt="CSS3" className="img-fluid skill-icon" />
          </div>
          <div className="col-4 col-md-2 mb-3">
            <img src={js} alt="JavaScript" className="img-fluid skill-icon" />
          </div>
          <div className="col-4 col-md-2 mb-3">
            <img src={react} alt="React" className="img-fluid skill-icon" />
          </div>
          <div className="col-4 col-md-2 mb-3">
            <img src={next} alt="React" className="img-fluid skill-icon" />
          </div>
        </div>


        {/* Row 2 */}
        <div className="row justify-content-center">
          <div className="col-4 col-md-2 mb-3">
            <img src={bootstrap} alt="Bootstrap" className="img-fluid skill-icon" />
          </div>
          
          <div className="col-4 col-md-2 mb-3">
            <img src={vs} alt="VS Code" className="img-fluid skill-icon" />
          </div>
          <div className="col-4 col-md-2 mb-3">
            <img src={git} alt="Git" className="img-fluid skill-icon" />
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
