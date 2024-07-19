import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <p>
            We believe in Smart Sustainability: The practice of living a
            sustainable life while spreading awareness to the local community
            about sustainable living at the same time.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>OUR COMPANY</h3>
          <ul>
            <li><a href="/About">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>SERVICES</h3>
          <ul>
            <li><a href="/services">Shredding</a></li>
            <li><a href="/services">Composting</a></li>
            <li><a href="/services">E-waste</a></li>
            <li><a href="/services">Waste Pick-Up</a></li>
            <li><a href="/services">Construction and Demolition Waste</a></li>
          </ul>
        </div>
        
       
      </div>
      <div className="footerImg">
        
      </div>
    </footer>
  );
};

export default Footer;