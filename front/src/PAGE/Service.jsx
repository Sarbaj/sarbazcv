import React, { useState } from "react";
import '../STYLE/service.css';
import { FaPalette, FaCode, FaVial } from 'react-icons/fa';

const services = [
  {
    title: "Corporate Shoot",
    description: "Professional photography that elevates your brand — executive portraits, office ambience, team candids, and product visuals styled with premium lighting. Ideal for websites, profiles, brochures, and social media branding.",
    icon: <FaPalette />,
    number: "01",
  },
  {
    title: "Professional Reels",
    description: "We Provide Professional Reels with best resolution and professional edit. Premium media production services using the best industry tools like Adobe Premiere Pro and Photoshop.",
    icon: <FaCode />,
    number: "02",
  },
  {
    title: "Advertisement",
    description: "Creative ad photography & video that sells your story — bold visuals, product highlights, and cinematic concepts crafted to boost brand engagement across digital and print platforms.",
    icon: <FaVial />,
    number: "03",
  },
];

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-label">WHAT WE DO</span>
        <h2 className="section-title">Our Services</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            className={`service-card-modern ${hoveredIndex === index ? 'hovered' : ''} ${index === 0 ? 'featured' : ''}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="service-number-large">{service.number}</div>
            <div className="service-icon-modern">{service.icon}</div>
            <h3 className="service-title-modern">{service.title}</h3>
            <p className="service-description-modern">{service.description}</p>
            <div className="service-arrow-modern">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
