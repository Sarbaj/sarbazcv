import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaWhatsapp, FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';
import '../STYLE/navbar.css';
import logo from '../assets/logos.gif';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const Navref = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuLinksRef = useRef(null);
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
  }, []);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      document.body.style.overflow = 'hidden';
      
      gsap.fromTo(menuOverlayRef.current,
        {
          clipPath: 'circle(0% at 100% 0%)',
          opacity: 1
        },
        {
          clipPath: 'circle(150% at 100% 0%)',
          duration: 0.8,
          ease: 'power3.inOut'
        }
      );

      gsap.fromTo(menuLinksRef.current.children,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power2.out'
        }
      );
    } else {
      gsap.to(menuLinksRef.current.children, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      });

      gsap.to(menuOverlayRef.current, {
        clipPath: 'circle(0% at 100% 0%)',
        duration: 0.6,
        ease: 'power3.inOut',
        onComplete: () => {
          setMenuOpen(false);
          document.body.style.overflow = 'unset';
        }
      });
    }
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
    <>
      <nav className={`navbar ${menuOpen ? 'menu-active' : ''}`} ref={Navref}>
        <div className={`logo ${menuOpen ? 'hidden' : ''}`}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Full-screen menu overlay - rendered at root level */}
      <div ref={menuOverlayRef} className={`nav-overlay ${menuOpen ? 'active' : ''}`}>
        <div ref={menuLinksRef} className="menu-links-wrapper">
          <Link to="/" onClick={toggleMenu}>home</Link>
          <Link to="/about" onClick={toggleMenu}>about</Link>
          <Link to="/services" onClick={toggleMenu}>services</Link>
          <Link to="/projects" onClick={toggleMenu}>projects</Link>
          <Link to="/journey" onClick={toggleMenu}>my journey</Link>
          <Link to="/contact" onClick={toggleMenu}>contact</Link>
          {isLoggedIn && (
            <Link to="/bin/auth/dashboard" onClick={toggleMenu}>dashboard</Link>
          )}
          
          <div className="mobile-social-icons">
            <a href="https://www.linkedin.com/in/sarbaz-malek-115027231" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Sarbaj" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://wa.me/qr/ZLB7AW7H5CU2K1" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>

          {isLoggedIn && (
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
      </div>
    </>
  );
};

export default Navbar;
