import React from 'react'
import '../STYLE/contact.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub , FaWhatsapp , FaBars, FaTimes } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
     <footer className="contact-footer">
         
            <div className="footer-center">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-right">
              <a href="https://www.linkedin.com/in/sarbaz-malek-115027231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                     <a href="https://github.com/Sarbaj" target="_blank" rel="noopener noreferrer"><FaGithub  /></a>
                     <a href="https://wa.me/qr/ZLB7AW7H5CU2K1" target="_blank" rel="noopener noreferrer"><FaWhatsapp  /></a>
            </div>
             <div className="footer-left">
              <p>📞 +91 81418 75116</p>
              <p>📧 sarbajmalek3456@gmail.com</p>
            </div>
          </footer></>
  )
}

export default Footer