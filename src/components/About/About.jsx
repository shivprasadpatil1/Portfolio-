import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Break from "../../assets/break1.png";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import internshipLetter from "../../assets/internship-letter.pdf";

function About() {
  return (
    <div id="about">
      <div className="container mt-4 pt-5">
        <div className="row">
          <div className="aboutdetails">
            <h2 className=" text-white  d-flex justify-content-center text-uppercase">
              About <span style={{ color: "#5a9494ff" }}>ME</span>
            </h2>
          </div>
          <p className="paragraph text-light text-center ">
            I am a passionate web developer who loves building creative and
            modern applications. Always eager to learn new technologies and
            improve my skills.
          </p>
         
        </div>
        <div className="row mt-2">
          {/* Education */}
          <div className="col-md-6 mb-4">
            <div className="card text-white shadow-lg border-0 h-100">
              <div className="card-body text-center">
                <h4 className="card-title education">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    style={{ color: "#5aa1d8", marginRight: "8px" }}
                  />
                  Education
                </h4>
                <p className="card-text mt-3">
                  <strong>MCA (Sandwich)</strong> at
                  DY Patil college 
                  <div className="text-info pt-2">
                  <span className="text-info">CGPA: 7.6 / 10</span>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="col-md-6 mb-4">
            <div className="card text-white shadow-lg border-0 h-100">
              <div className="card-body text-center">
                <h4 className="card-title work-experience">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    style={{ color: "#5aa1d8", marginRight: "8px" }}
                  />
                  Work Experience
                </h4>
                <p className="card-text mt-3">
  <strong>MERN Developer Intern</strong> at Ishwarya BI Technologies <br />
  <span className="text-info pt-2 d-block">
    Internship duration: 11 months
  </span>
</p>
<a
  href={internshipLetter}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-info mt-3"
>
  View Internship Letter (PDF)
</a>

              </div>
            </div>
          </div>

          {/* Certificates */}
        <div className="col-md-8 mx-auto pt-4 mb-4">
  <div className="card text-white shadow-lg  h-100">
    <div className="card-body text-center">
      <h4 className="card-title certificates mb-4">
        <FontAwesomeIcon
          icon={faCertificate}
          style={{ color: "#5aa1d8", marginRight: "8px" }}
        />
        Certificates
      </h4>

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="p-1  rounded-3">
            <h6 className="mb-1">HTML</h6>
            <small className="text-secondary">Issued by freeCodeCamp</small>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="p-1  rounded-3">
            <h6 className="mb-1">CSS</h6>
            <small className="text-secondary ">Issued by freeCodeCamp</small>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="p-1  rounded-3">
            <h6 className="mb-1">JavaScript</h6>
            <small className="text-secondary">Issued by freeCodeCamp</small>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="p-1  rounded-3">
            <h6 className="mb-1">React</h6>
            <small className="text-secondary">Issued by freeCodeCamp</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default About;
