import React, { useRef } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  const menu = useRef();

  return (
    <nav className="navbar-container">
      <h1 className="heading">PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="desktop">
        <Link to="home" smooth spy duration={200} activeClass="active">
          <li>Home</li>
        </Link>
        <Link to="about" smooth spy duration={200} activeClass="active">
          <li>About</li>
        </Link>
        <Link to="skills" smooth spy duration={200} activeClass="active">
          <li>Skills</li>
        </Link>
        <Link to="projects" smooth spy duration={200} activeClass="active">
          <li>Projects</li>
        </Link>
        <Link to="contact" smooth spy duration={200} activeClass="active">
          <li>Contact</li>
        </Link>
      </ul>

      {/* Hamburger Button */}
      <div
        className="hamburger"
        ref={menu}
        data-bs-toggle="collapse"
        data-bs-target="#mobileMenu"
        aria-controls="mobileMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          menu.current.classList.toggle("activeham");
        }}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <div className="collapse mobile" id="mobileMenu">
        <Link to="home" smooth spy duration={400} activeClass="active" className="nav-link"
          onClick={() => menu.current.classList.remove("activeham")}>
          Home
        </Link>
        <Link to="about" smooth spy duration={400} activeClass="active" className="nav-link"
          onClick={() => menu.current.classList.remove("activeham")}>
          About
        </Link>
        <Link to="skills" smooth spy duration={400} activeClass="active" className="nav-link"
          onClick={() => menu.current.classList.remove("activeham")}>
          Skills
        </Link>
        <Link to="projects" smooth spy duration={400} activeClass="active" className="nav-link"
          onClick={() => menu.current.classList.remove("activeham")}>
          Projects
        </Link>
        <Link to="contact" smooth spy duration={400} activeClass="active" className="nav-link"
          onClick={() => menu.current.classList.remove("activeham")}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
