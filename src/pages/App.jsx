import React from "react";

// Components
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// Global styles
import "../styles/globals.css";
import "../styles/variables.css";

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
