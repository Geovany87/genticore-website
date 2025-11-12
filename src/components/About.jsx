import React from "react";
import "../styles/about.css";
import useReveal from "../hooks/useReveal";
useReveal();

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Genticore</h2>
        <p>
          Genticore is a digital innovation agency that integrates design thinking,
          agile development, and next-gen technology to build meaningful solutions.
        </p>
        <p>
          Our approach is inspired by Penn LSP principles — lean processes,
          scalable architecture, and performance at every layer. We value
          transparency, craftsmanship, and continuous improvement.
        </p>
      </div>
    </section>
  );
}
