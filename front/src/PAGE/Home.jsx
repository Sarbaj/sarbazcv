import React from "react";
import "../STYLE/home.css";
import Work from "./Work";
import Contact from "./Contact";
import About from "./About";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./Service";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const headingRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <>
      <div className="homecontainer">
        <h1 ref={headingRef}>
          Building <span>Production-Grade</span> Web & AI Systems That Scale
        </h1>
        <p>
          Hi, I'm Sarbaz Malek — Full-Stack MERN Developer specializing in scalable architectures, AI-powered platforms, and secure real-time systems.
        </p>
        <div className="impact-badges">
          <span className="badge">🏆 15+ Production Applications Delivered</span>
        </div>
        <div className="cta-buttons">
          <a href="https://drive.google.com/file/d/1rCkxFa9mdNH-8Z5iCiuvBQcPU2LkOEZR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary">View Resume</a>
          <a href="/contact" className="btn-secondary">Hire Me</a>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee">
      <span>
  AI Integration • JWT Authentication • MongoDB Atlas • WebSockets • 
  Real-Time Chat Systems • RESTful APIs • GSAP Animations • Responsive UI/UX • 
  Design Thinking • Scalable Architecture • Performance Optimization • 
  Freelancing Experience • Full Deployment Setup • Secure Auth Systems • 
  Modern Frontend Development • Backend API Engineering
</span>

<span>
  AI Integration • JWT Authentication • MongoDB Atlas • WebSockets • 
  Real-Time Chat Systems • RESTful APIs • GSAP Animations • Responsive UI/UX • 
  Design Thinking • Scalable Architecture • Performance Optimization • 
  Freelancing Experience • Full Deployment Setup • Secure Auth Systems • 
  Modern Frontend Development • Backend API Engineering
</span>

        </div>
      </div>

      <About />
      <Work />
      <Services />
      <Contact />
      
    </>
  );
};

export default Home;
