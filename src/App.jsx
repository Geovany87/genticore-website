// ============================================================
// App.jsx
// Root component: Imports and renders all site sections
// ============================================================

import React from "react";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/portfolio.css";
import "./styles/contact.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
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

export default App;
