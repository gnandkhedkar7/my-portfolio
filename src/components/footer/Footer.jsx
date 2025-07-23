import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import { Github, User } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img className="footer-logo-image" src={logo} alt="logo" />
          <p>
            Frontend developer specializing in building modern web application
            with React
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <User />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2025 Gauri Nandkhedkar. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy policy</p>
          <div className="footer-connect">
            <span>Connect with me:</span>
            <a
              href="https://github.com/gnandkhedkar7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/gnandkhedkar7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
            >
              <SiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
