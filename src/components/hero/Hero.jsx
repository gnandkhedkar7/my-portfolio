import React from "react";
import "./Hero.css";
import profile_image from "../../assets/profile_image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_image} alt="profile_image" />
      <h1>
        <span>I'm Gauri Nandkhedkar,</span> frontend developer based in Munich,
        Germany.
      </h1>
      <p>
        I am a frontend developer from India, with a 3+ years of experience with
        Barclays.{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a href="/Resume.pdf" download className="hero-resume">My resume</a>
      </div>
    </div>
  );
};

export default Hero;
