// src/pages/App.jsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
