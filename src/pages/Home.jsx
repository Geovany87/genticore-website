import React, { useEffect, useState } from "react";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import "../styles/hero.css";
import heroProfile from "../assets/images/hero/profile.png";

export default function HomePage() {
  const roles = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Creative Technologist",
    "Problem Solver",
  ];
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const nextRole = roles[roleIndex];

    const typingEffect = setTimeout(() => {
      if (!isDeleting && charIndex < nextRole.length) {
        setCurrentText(nextRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(nextRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === nextRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I’m <span className="highlight">Geovany</span>
            </h1>
            <h2>
              <span className="typing">{currentText}</span>
              <span className="cursor">|</span>
            </h2>
            <p>
              Passionate about creating intuitive, elegant, and performant
              digital experiences.
            </p>
            <a href="#portfolio" className="btn-primary">
              View My Work
            </a>
          </div>

          <div className="hero-image">
            <img
              src={heroProfile}
              alt="Profile"
              className="profile-photo"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Other sections */}
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
