import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Portfolio Name */}
        <div className="footer-brand">
          <h2>PORTFOLIO</h2>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <p>+91 9921328928</p>
          <span className="separator">|</span>
          <p>shivprasadpatil398@gmail.com</p>
        </div>

        {/* Social Links with Font Awesome */}
        <div className="footer-social">
          <a
            href="www.linkedin.com/in/shivprasad-patil-8209522a3"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/shivprasadpatil1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
