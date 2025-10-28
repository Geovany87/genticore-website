import React from "react";
import "../styles/services.css";

export default function Services() {
  const services = [
    {
      title: "Full Stack Web Development",
      description:
        "Building scalable and high-performance web applications using the MERN stack — React, Node.js, Express, and MongoDB.",
      icon: "💻",
    },
    {
      title: "IT Support & Infrastructure",
      description:
        "Providing end-to-end IT solutions — from hardware setup to network configuration and maintenance.",
      icon: "🛠️",
    },
    {
      title: "SaaS Product Design",
      description:
        "Developing modern SaaS products with clean UI, secure authentication, and robust backends.",
      icon: "☁️",
    },
    {
      title: "API Development & Integration",
      description:
        "Creating efficient RESTful APIs and integrating third-party services to connect applications seamlessly.",
      icon: "🔗",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services__container">
        <h2>My Services</h2>
        <p className="services__intro">
          I help businesses and teams build reliable digital solutions through modern web
          technologies and IT expertise.
        </p>

        <div className="services__grid">
          {services.map((service, index) => (
            <div className="service__card" key={index}>
              <div className="service__icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
