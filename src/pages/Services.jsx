import React from "react";
import "../styles/services.css";

const services = [
  {
    title: "E-commerce Solutions",
    description: "Custom online stores with secure payments, inventory, and modern UI/UX.",
    image: "/src/assets/images/services/services-ecommerce.png",
  },
  {
    title: "Consulting",
    description: "Helping businesses adopt technology to optimize processes and scale efficiently.",
    image: "/src/assets/images/services/services-consulting.png",
  },
  {
    title: "SaaS Development",
    description: "End-to-end SaaS product development with scalable cloud solutions.",
    image: "/src/assets/images/services/services-saas-startup.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services_container">
        <h2 className="section_title">Our Services</h2>
        <div className="services_grid">
          {services.map((service, index) => (
            <div key={index} className="service_card">
              <img src={service.image} alt={service.title} className="service_img" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
