import React from 'react'
import '../STYLE/contact.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
     <footer className="contact-footer">
            <div className="footer-left">
              <p>📞 +91 81418 75116</p>
              <p>📧 sarbajmalek3456@gmail.com</p>
            </div>
            <div className="footer-center">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-right">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </footer></>
  )
}

export default Footer