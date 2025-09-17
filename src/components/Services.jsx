import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Services</h2>

        <div className="services_grid">
          <div className="service_card">
            <h3>Web Development</h3>
            <p>
              Building modern, scalable, and responsive websites using the MERN
              stack. Focused on performance and user experience.
            </p>
          </div>

          <div className="service_card">
            <h3>API Development</h3>
            <p>
              Designing and implementing RESTful and GraphQL APIs for seamless
              communication between front-end and back-end systems.
            </p>
          </div>

          <div className="service_card">
            <h3>UI/UX Design</h3>
            <p>
              Creating clean, intuitive, and user-friendly designs that align
              with brand identity and business goals.
            </p>
          </div>

          <div className="service_card">
            <h3>Consulting</h3>
            <p>
              Offering professional guidance to optimize workflows, improve code
              quality, and adopt best industry practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
