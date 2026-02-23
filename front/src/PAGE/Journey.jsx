import React from "react";
import "../STYLE/journey.css";
import { FaGraduationCap, FaBriefcase, FaTrophy, FaRocket, FaRobot, FaStar } from "react-icons/fa";

const Journey = () => {
  return (
    <div className="journey-container">
      <h1 className="journey-title">My Journey</h1>
      
      <div className="journey-timeline">
        <div className="journey-item">
          <div className="journey-icon"><FaGraduationCap /></div>
          <div className="journey-content">
            <h2>BCA First Year - The Spark</h2>
            <p>
              My journey into development started long before I understood terms like 'full-stack' or 'scalability.' 
              It began in Semester 2, when I created my very first website. I still remember the excitement of 
              experimenting with layouts, colors, and simple animations. What surprised me the most was not the 
              website itself, but the reaction it received—my design looked better than the final-year students' 
              projects, and even my teachers appreciated the effort. That moment gave me the confidence I didn't 
              know I needed.
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-icon"><FaBriefcase /></div>
          <div className="journey-content">
            <h2>Second Year - First Freelance</h2>
            <p>
              By the time I entered Second Year, my curiosity had turned into a skill, and my skill began turning 
              into opportunities. I built my first freelancing project—an Online Tournament Management System, 
              complete with player entry, match scheduling, result management, and smooth UI. It became the first 
              project that made me feel like, 'Yes, this is what I want to do in life.'
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-icon"><FaTrophy /></div>
          <div className="journey-content">
            <h2>Final Year - Rank 1 Achievement</h2>
            <p>
              In Final Year, everything came full circle. I developed a full software solution for my academic 
              project and ended up getting Rank 1 in Software Development. That achievement validated the countless 
              hours I spent debugging, designing, and learning.
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-icon"><FaRocket /></div>
          <div className="journey-content">
            <h2>MCA - Professional Growth</h2>
            <p>
              After BCA, I started my MCA journey, and things only got better. I created a B2B website for a startup, 
              handling everything from product listings and authentication to modern responsive UI. I also developed 
              a service-based company website, helping them showcase their business with a clean and professional 
              online presence.
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-icon"><FaRobot /></div>
          <div className="journey-content">
            <h2>AI Integration - New Horizons</h2>
            <p>
              One of the most exciting moments came when Ganpat University's MCA faculty approached me to build an 
              AI-powered website for their AI Viva Portal. I integrated modern technologies, AI question generation, 
              anti-cheat features, live monitoring, and smooth UI/UX to create a complete digital viva experience. 
              Bringing AI into my projects opened my eyes to a whole new world of possibilities.
            </p>
          </div>
        </div>

        <div className="journey-item">
          <div className="journey-icon"><FaStar /></div>
          <div className="journey-content">
            <h2>The Journey Continues...</h2>
            <p>
              Looking back, what began as a simple college assignment in BCA has turned into a passionate journey 
              of freelancing, building real products, integrating AI, and continuously pushing myself to learn 
              something new every day. And honestly, this is just the beginning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
