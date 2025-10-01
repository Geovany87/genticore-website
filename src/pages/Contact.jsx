import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact_container">
        <h2 className="section_title">Contact Us</h2>
        <p className="section_subtitle">
          Let’s work together — send me a message and I’ll get back to you.
        </p>

        <form className="contact_form">
          <div className="form_group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name" required />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email address" required />
          </div>

          <div className="form_group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn_primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
