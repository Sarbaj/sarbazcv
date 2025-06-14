import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub , FaWhatsapp , FaBars, FaTimes } from 'react-icons/fa';
import '../STYLE/navbar.css';
import logo from '../assets/logos.gif';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const Navref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  
    gsap.fromTo(
      Navref.current,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: Navref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" ref={Navref}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>about</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>contact</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>projects</Link>
      </div>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/sarbaz-malek-115027231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Sarbaj" target="_blank" rel="noopener noreferrer"><FaGithub  /></a>
        <a href="https://wa.me/qr/ZLB7AW7H5CU2K1" target="_blank" rel="noopener noreferrer"><FaWhatsapp  /></a>
      </div>
    </nav>
  );
};

export default Navbar;
