import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='nav-image' src={logo} alt='logo' />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contacts</li>
        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar