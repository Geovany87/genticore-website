import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2>Get in Touch</h2>
        <p className="contact__intro">
          Have a project in mind or need technical support? Let’s collaborate and build something meaningful.
        </p>

        <form
          className="contact__form"
          action="https://formspree.io/f/mnqeyjjv"
          method="POST"
        >
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
