import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub , FaWhatsapp , FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import '../STYLE/navbar.css';
import logo from '../assets/logos.gif';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const Navref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminName, setAdminName] = useState('Admin');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

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

    // Check if user is logged in
    const checkAuth = async () => {
      const token = localStorage.getItem("cvToken");
      if (token) {
        try {
          const response = await fetch("https://sarbazcvbackend.vercel.app/bin/getUsername", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          });
          const data = await response.json();
          if (response.status === 200 && data.payload) {
            setIsLoggedIn(true);
            setAdminName(data.payload.name || 'Admin');
          }
        } catch (error) {
          console.error('Auth check error:', error);
        }
      }
    };
    checkAuth();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("cvToken");
    setIsLoggedIn(false);
    setAdminName('Admin');
    setShowProfileMenu(false);
    navigate('/');
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
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
        <Link to="/services" onClick={() => setMenuOpen(false)}>services</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>projects</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>contact</Link>
        {isLoggedIn && (
          <Link to="/bin/auth/dashboard" onClick={() => setMenuOpen(false)}>dashboard</Link>
        )}
        
        {/* Show social icons in mobile menu when active */}
        {menuOpen && (
          <div className="mobile-social-icons">
            <a href="https://www.linkedin.com/in/sarbaz-malek-115027231" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Sarbaj" target="_blank" rel="noopener noreferrer"><FaGithub  /></a>
            <a href="https://wa.me/qr/ZLB7AW7H5CU2K1" target="_blank" rel="noopener noreferrer"><FaWhatsapp  /></a>
          </div>
        )}

        {/* Show profile in mobile menu when active */}
        {menuOpen && isLoggedIn && (
          <div className="mobile-profile-section">
            <div className="profile-icon" onClick={toggleProfileMenu}>
              <FaUser />
            </div>
            {showProfileMenu && (
              <div className="profile-dropdown">
                <div className="profile-name">
                  <FaUser /> {adminName}
                </div>
                <button className="logout-btn" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Desktop social icons and profile */}
      <div className="social-icons desktop-only">
        <a href="https://www.linkedin.com/in/sarbaz-malek-115027231" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Sarbaj" target="_blank" rel="noopener noreferrer"><FaGithub  /></a>
        <a href="https://wa.me/qr/ZLB7AW7H5CU2K1" target="_blank" rel="noopener noreferrer"><FaWhatsapp  /></a>
        
        {isLoggedIn && (
          <div className="profile-section">
            <div className="profile-icon" onClick={toggleProfileMenu}>
              <FaUser />
            </div>
            {showProfileMenu && (
              <div className="profile-dropdown">
                <div className="profile-name">
                  <FaUser /> {adminName}
                </div>
                <button className="logout-btn" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
