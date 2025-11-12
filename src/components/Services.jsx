import React, { useEffect } from "react";
import "../styles/services.css";
import { FaLaptopCode, FaPalette, FaTools } from "react-icons/fa";

export default function Services() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const onScroll = () => {
      for (let el of revealElements) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 100;
        if (elementTop < windowHeight - visiblePoint) {
          el.classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="services" className="services reveal">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Web Development</h3>
          <p>
            Scalable, performant, and secure web platforms built with modern frameworks and clean architecture.
          </p>
        </div>
        <div className="service-card">
          <FaPalette className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>
            User-centered interfaces crafted to enhance usability, accessibility, and aesthetics.
          </p>
        </div>
        <div className="service-card">
          <FaTools className="service-icon" />
          <h3>IT Support & Systems Maintenance</h3>
          <p>
            Backed by <strong>CompTIA A+</strong> certification — providing diagnostics, hardware setup, and network optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
