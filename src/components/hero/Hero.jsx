import React from 'react';
import './Hero.css';
import profile_image from '../../assets/profile_image.jpg';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_image} alt='profile_image' />
        <h1><span>I'm Gauri Nandkhedkar,</span> frontend developer based in Freising, Germany.</h1>
        <p>I am a frontend developer from India, with a 3+ years of experience with Barclays. </p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">
                    My resume
                </div>
        </div>
    </div>
  )
}

export default Hero