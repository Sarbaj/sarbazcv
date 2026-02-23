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

    // API call commented out - using static auth check only
    // const checkAuth = async () => {
    //   const token = localStorage.getItem("cvToken");
    //   if (token) {
    //     try {
    //       const response = await fetch("https://sarbazcvbackend.vercel.app/bin/getUsername", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ token }),
    //       });
    //       const data = await response.json();
    //       if (response.status === 200 && data.payload) {
    //         setIsLoggedIn(true);
    //         setAdminName(data.payload.name || 'Admin');
    //       }
    //     } catch (error) {
    //       console.error('Auth check error:', error);
    //     }
    //   }
    // };
    // checkAuth();
  }, []);

  const toggleMenu = () => {
    if (!menuOpen) {
      // Opening menu - animate circle expansion
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

      // Animate menu links with stagger
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
      // Closing menu - reverse animation
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
    <nav className="navbar" ref={Navref}>
      <div className={`logo ${menuOpen ? 'hidden' : ''}`}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div ref={menuOverlayRef} className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <div ref={menuLinksRef} className="menu-links-wrapper">
          <Link to="/" onClick={() => { toggleMenu(); }}>home</Link>
          <Link to="/about" onClick={() => { toggleMenu(); }}>about</Link>
          <Link to="/services" onClick={() => { toggleMenu(); }}>services</Link>
          <Link to="/projects" onClick={() => { toggleMenu(); }}>projects</Link>
          <Link to="/journey" onClick={() => { toggleMenu(); }}>my journey</Link>
          <Link to="/contact" onClick={() => { toggleMenu(); }}>contact</Link>
          {isLoggedIn && (
            <Link to="/bin/auth/dashboard" onClick={() => { toggleMenu(); }}>dashboard</Link>
          )}
          
          {/* Show social icons in mobile menu when active */}
          {menuOpen && (
            <div className="mobile-social-icons">
              <a href="https://www.linkedin.com/in/sarbaz-malek-115027231" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Sarbaj" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://wa.me/qr/ZLB7AW7H5CU2K1" target="_blank" rel="noopener noreferrer">WhatsApp</a>
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
