// ==========================
// Genticore - Main App File
// Built following Penn LPS Professional MERN Practices
// ==========================

import React from "react";

// Import global styles
import "./styles/variables.css";
import "./styles/globals.css";

// Import all main components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ==========================
// App Component
// ==========================
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
