import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  return (
    <>
      {/* ✅ Header Navigation */}
      <Header />

      {/* ✅ Hero Section */}
      <main>
        <section id="hero">
          <Hero />
        </section>

        {/* ✅ About Section */}
        <section id="about">
          <About />
        </section>

        {/* ✅ Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* ✅ Portfolio / Projects Section */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* ✅ Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
