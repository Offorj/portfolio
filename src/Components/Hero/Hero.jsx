import React from 'react';
import './Hero.css'; // Ensure this path is correct relative to the current file
import profile_img from '../../assets/1715099718048.jpg'; // Ensure this path is correct
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    
      <div id='home' className='hero'>
        <img src={profile_img} alt="Profile Picture" className='image'/> {/* Added alt attribute */}
        <h1> <span>I'm Offor John,</span> frontend developer based in NIGERIA.</h1>
        <p>I am a frontend developer from Lagos, NIGERIA with 5 years of experience in multiple companies like Microsoft, Tesla, and Apple.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink href="#contact">Connect with me </AnchorLink></div>
          <div className="hero-resume">My resume</div>
        </div>
      </div>
   
  );
};

export default Hero; // This should work fine as is
