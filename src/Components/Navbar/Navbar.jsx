import React from 'react';
import './Navbar.css'
import logo from '../../assets/ojs_logo-removebg-preview.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () =>{
  
  return(
    <div className='navbar'>
<img src={logo} alt="logo" />
<ul className='nav-menu'>
    <li><AnchorLink href='#home'>Home</AnchorLink></li>
    <li><AnchorLink href="#about">About Me</AnchorLink></li>
    <li><AnchorLink href="#services">Services</AnchorLink></li>
    <li><AnchorLink href="#work">Portfolio</AnchorLink></li>
    <li><AnchorLink href="#contact">Contact</AnchorLink></li>
</ul>
<div className='nav-connect'><AnchorLink href="#contact">Connect with Me</AnchorLink></div>
    </div>
  
  )
}
export default Navbar