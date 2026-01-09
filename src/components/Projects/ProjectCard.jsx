import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Projects.css";
import ProjectComingSoon from "../ProjectComingSoon.jsx";

function ProjectCard({ image, title, description, techStack, liveLink, githubLink, isLive }) {
  const [show, setShow] = useState(false);
const [showComingSoon, setShowComingSoon] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Project Card */}
      <div className="project-card" onClick={handleShow} style={{ cursor: "pointer" }}>
        <img src={image} alt={title} className="project-image" />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="tech-stack">Tech stack: {techStack.join(", ")}</p>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={image} alt={title} className="img-fluid rounded mb-3" />
          <p>{description}</p>
          <p className="tech-stack">Tech stack: {techStack.join(", ")}</p>

          <div className="buttons d-flex justify-content-center gap-3 mt-3">
           <button
  className="btn live"
  onClick={() => {
    if (isLive) {
      window.open(liveLink, "_blank");
    } else {
      setShowComingSoon(true);
    }
  }}
>
  Live Preview
</button>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn code"
            >
              View Code
            </a>
          </div>
        </Modal.Body>
      </Modal>

      <ProjectComingSoon
  show={showComingSoon}
  onHide={() => setShowComingSoon(false)}
  title={title}
/>
    </>
  );
}

export default ProjectCard;
