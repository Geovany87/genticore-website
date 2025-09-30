// src/pages/Services.jsx
import React from "react";
import "../styles/services.css";
import ecommerceImg from "../assets/images/services/services-ecommerce.png";
import consultingImg from "../assets/images/services/services-consulting.png";
import saasImg from "../assets/images/services/services-saas-startup.png";

function Services() {
  const services = [
    {
      title: "E-Commerce Solutions",
      description:
        "Custom-built online stores with secure payments, scalable design, and smooth user experience.",
      image: ecommerceImg,
    },
    {
      title: "IT Consulting",
      description:
        "Professional consulting to optimize your IT infrastructure, improve workflows, and reduce costs.",
      image: consultingImg,
    },
    {
      title: "SaaS Development",
      description:
        "Scalable SaaS platforms tailored to your business needs with modern cloud technologies.",
      image: saasImg,
    },
  ];

  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
