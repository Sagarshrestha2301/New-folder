// src/components/Layout/Header.js

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCogs, FaBlog, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { isUserLoggedIn, logoutUser } from '../../utils/auth';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;

    hamburger.addEventListener('click', () => {
      body.classList.toggle('menu-open');
    });

    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const isLoggedIn = isUserLoggedIn();

  return (
    <nav className={isOpen ? 'nav-active' : ''}>
      <Link to="/"><img src="/assets/logo.png" alt="logo" className="logo" /></Link>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isOpen ? 'show' : ''}>
        {isLoggedIn && (
          <>
            <li><Link to="/" onClick={toggleMenu}><FaHome />Home</Link></li>
            <li><Link to="/About" onClick={toggleMenu}><FaInfoCircle />About</Link></li>
            <li><Link to="/Services" onClick={toggleMenu}><FaCogs />Services</Link></li>
            <li><Link to="/Blog" onClick={toggleMenu}><FaBlog />Blog</Link></li>
            <li><Link to="/Contact" onClick={toggleMenu}><FaEnvelope />Contact</Link></li>
            <li><button className="logout-button" onClick={handleLogout}><FaSignOutAlt />Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;