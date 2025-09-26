import React from "react";
import "../styles/services.css";

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Full-stack web applications built with the MERN stack. Clean, scalable, and optimized for performance.",
    },
    {
      title: "UI/UX Design",
      description:
        "Responsive, user-centered designs that provide an engaging experience across all devices.",
    },
    {
      title: "API Integration",
      description:
        "Secure and efficient REST & GraphQL APIs integration for dynamic data-driven applications.",
    },
    {
      title: "Consulting",
      description:
        "Technical consulting to help optimize workflows, improve scalability, and adopt modern web practices.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services_container">
        <h2 className="section_title">Services</h2>
        <div className="services_grid">
          {services.map((service, index) => (
            <div key={index} className="service_card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
