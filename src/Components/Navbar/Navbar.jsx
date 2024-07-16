import React, { useRef } from 'react';
import './Navbar.css'
import logo from '../../assets/Tue_2_07_2024_13_17_25-removebg-preview.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu-removebg-preview.png'
import menu_close from '../../assets/menu_close.png'

const Navbar = () => {

 const menuRef = useRef();

 const openMenu = () => {
  menuRef.current.style.right="0";
 }
 const closeMenu = () => {
  menuRef.current.style.right="-350px";
 }

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logo'/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt=""  className='nav-mob-close'/>
        <li><AnchorLink href='#home'>Home</AnchorLink></li>
        <li><AnchorLink href="#about">About Me</AnchorLink></li>
        <li><AnchorLink href="#services">Services</AnchorLink></li>
        <li><AnchorLink href="#work">Portfolio</AnchorLink></li>
        <li><AnchorLink href="#contact">Contact</AnchorLink></li>
      </ul>
      
      <div className='nav-connect'><AnchorLink href="#contact">Connect with Me</AnchorLink></div>
    </div>
  );
}

export default Navbar;
