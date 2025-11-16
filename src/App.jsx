import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
