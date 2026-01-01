// components/ActionButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ActionButton = ({
  type,          // "download" | "navigate"
  text,
  file,          // resume file (for download)
  to,            // route path (for navigation)
  buttonClass,
  linkClass = ""
}) => {
  const navigate = useNavigate();

  // Resume Download Button
  if (type === "download") {
    return (
      <button className={buttonClass}>
        <a
          href={file}
          download
          className={`text-decoration-none ${linkClass}`}
        >
          {text}
        </a>
      </button>
    );
  }

  // Navigation Button
  if (type === "navigate") {
    return (
      <button
        className={buttonClass}
        onClick={() => navigate(to)}
      >
        {text}
      </button>
    );
  }

  return null;
};

export default ActionButton;
