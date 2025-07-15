import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { LineChart, Dot, ArrowDownZA, Underline } from "lucide-react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [page, setPage] = useState("about");
  return (
    <div className="navbar">
      <img className="nav-image" src={logo} alt="logo" />
      <ul className="nav-menu">
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
          <AnchorLink className='anchor-link' offset={50} href='#about'>
          <p
            onClick={() => {
              setPage("about");
            }}
            className={page === "about" ? "nav-selected-page" : ""}
          >
            About me
          </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#skills'>
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
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
          <p
            onClick={() => {
              setPage("projects");
            }}
            className={page === "projects" ? "nav-selected-page" : ""}
          >
            Portfolio
          </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
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
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
