// src/Contact.jsx
import { useState } from "react";
import "./App.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="contact-page" id="contact">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label>Message:</label>
        <textarea
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <footer className="footer">
        ©2025 NatureCure | Designed by Suvarna
      </footer>
    </div>
  );
}
