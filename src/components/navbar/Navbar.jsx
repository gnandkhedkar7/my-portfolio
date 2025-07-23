import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { LineChart, Dot, ArrowDownZA, Underline, Menu, X } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Navbar = () => {
  const [page, setPage] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img className="nav-image" src={logo} alt="logo" />
      <Menu className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <X className="nav-mob-close" onClick={closeMenu} />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setPage("home");
              }}
              className={page === "home" ? "nav-selected-page" : ""}
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#experience">
            <p
              onClick={() => {
                setPage("experience");
              }}
              className={page === "experience" ? "nav-selected-page" : ""}
            >
              About me
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p
              onClick={() => {
                setPage("skills");
              }}
              className={page === "skills" ? "nav-selected-page" : ""}
            >
              Skills
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p
              onClick={() => {
                setPage("projects");
              }}
              className={page === "projects" ? "nav-selected-page" : ""}
            >
              Achievements
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => {
                setPage("contact");
              }}
              className={page === "contact" ? "nav-selected-page" : ""}
            >
              Contact
            </p>
          </AnchorLink>
        </li>
        <div className="navbar-social-icons">
          <a
            href="https://github.com/gnandkhedkar7"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
          >
            <SiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/gnandkhedkar7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link">
            <SiLinkedin size={20} />
          </a>
        </div>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
