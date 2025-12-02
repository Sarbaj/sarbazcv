import React, { useState } from "react";
import '../STYLE/service.css';

const services = [
  {
    title: "Web Design",
    description: "Modern, clean, and user-focused UI/UX design for websites. Creating stunning visual experiences that captivate users and drive engagement.",
    icon: "🎨",
    number: "01",
  },
  {
    title: "Web Development",
    description: "Responsive, scalable, and robust web apps built with modern tech. Transforming ideas into powerful digital solutions with cutting-edge technologies.",
    icon: "💻",
    number: "02",
  },
  {
    title: "Web Testing",
    description: "Automated and manual testing to ensure performance and security. Delivering flawless user experiences through comprehensive quality assurance.",
    icon: "🧪",
    number: "03",
  },
];

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-label">What We Do</span>
        <h2 className="section-title">Our Services</h2>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div 
            className={`service-card ${hoveredIndex === index ? 'hovered' : ''}`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="service-number">{service.number}</div>
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
            <div className="service-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
