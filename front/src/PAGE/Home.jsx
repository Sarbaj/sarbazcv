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
          Making <span>Complex </span>Web Apps<br></br> Feel Simple 🤝
        </h1>
        <p>
          Hi, I'm Sarbaz Malek, a MERN Stack Developer based in Mehsana,Gujrat
          India.<br></br>
          With a passion for building efficient and user-friendly web
          applications, <br></br> I create seamless digital experiences that are
          functional, scalable, and impactful.
        </p>
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
      <Services />
      <Work />
      <Contact />
      
    </>
  );
};

export default Home;
