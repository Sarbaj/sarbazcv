import React from "react";
import '../STYLE/service.css'; // Optional: use inline CSS if not using file

const services = [
  {
    title: "Web Design",
    description: "Modern, clean, and user-focused UI/UX design for websites.",
    icon: "🎨",
  },
  {
    title: "Web Development",
    description: "Responsive, scalable, and robust web apps built with modern tech.",
    icon: "💻",
  },
  {
    title: "Web Testing",
    description: "Automated and manual testing to ensure performance and security.",
    icon: "🧪",
  },
];

function Services() {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
