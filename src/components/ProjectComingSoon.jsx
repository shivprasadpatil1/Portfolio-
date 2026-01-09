import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../components/Projects/Projects.css";

function ProjectComingSoon({ show, onHide, title }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Body className="coming-soon-ui text-center">
        <div className="loader"></div>

        <h4 className="mt-4">{title}</h4>
        <p className="text-muted mt-2">
          This project is currently under deployment 
        </p>

        <p className="small text-secondary">
          I’m optimizing performance, security, and UI  
          to deliver the best possible experience.
        </p>

        <Button variant="dark" className="mt-3" onClick={onHide}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectComingSoon;
