import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <p className="subtitle">Let’s build something great together.</p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Your email" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Your message" required></textarea>
          </label>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
