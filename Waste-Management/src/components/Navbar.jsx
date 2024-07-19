import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWrench, faRecycle, faInfoCircle, faSignInAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../assets/logo'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const closeMenu = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', closeMenu);
        return () => window.removeEventListener('resize', closeMenu);
    }, [isMenuOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="wastix Logo" className='logo' />
            </div>
            <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li onClick={() => { setMenu("home"); setIsMenuOpen(false); }} className={menu === "home" ? "active" : ""}>
                        <Link to="/"><FontAwesomeIcon icon={faHome} /> HOME</Link>
                    </li>
                    <li onClick={() => { setMenu("services"); setIsMenuOpen(false); }} className={menu === "services" ? "active" : ""}>
                        <Link to="/services"><FontAwesomeIcon icon={faWrench} /> Services</Link>
                    </li>
                    <li onClick={() => { setMenu("what-we-buy"); setIsMenuOpen(false); }} className={menu === "what-we-buy" ? "active" : ""}>
                        <Link to="/what-we-buy"><FontAwesomeIcon icon={faRecycle} /> WHAT WE BUY</Link>
                    </li>
                    <li onClick={() => { setMenu("About"); setIsMenuOpen(false); }} className={menu === "About" ? "active" : ""}>
                        <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} /> About</Link>
                    </li>
                    {!isAuthenticated ? (
                        <li onClick={() => { loginWithRedirect(); setIsMenuOpen(false); }} className={menu === "login" ? "active" : ""}>
                            <Link to="/auth"><FontAwesomeIcon icon={faSignInAlt} /> LOGIN</Link>
                        </li>
                    ) : (
                        <li onClick={() => { logout(); setIsMenuOpen(false); }} className={menu === "logout" ? "active" : ""}>
                            <Link to="/"><FontAwesomeIcon icon={faSignInAlt} /> LOGOUT</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="navbar-hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </div>
        </nav>
    );
};

export default Navbar;