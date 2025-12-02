import React from 'react'
import '../STYLE/footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="footer-logo">Sarbaz Malek</h2>
            <p className="footer-tagline">Full-Stack Developer crafting digital experiences</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Navigation</h3>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <h3>Connect</h3>
              <a href="https://www.linkedin.com/in/sarbaz-malek-115027231" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Sarbaj" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://wa.me/qr/ZLB7AW7H5CU2K1" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>

            <div className="footer-column">
              <h3>Contact</h3>
              <a href="tel:+918141875116">+91 81418 75116</a>
              <a href="mailto:sarbajmalek3456@gmail.com">sarbajmalek3456@gmail.com</a>
              <p className="footer-location">Mehsana, Gujarat, India</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/sarbaz-malek-115027231" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Sarbaj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://wa.me/qr/ZLB7AW7H5CU2K1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Sarbaz Malek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
