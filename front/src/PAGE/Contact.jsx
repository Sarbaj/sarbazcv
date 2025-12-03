import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../STYLE/contact.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });

  const HandleSendmsg = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Email Is Required");
      return;
    }
    if (!username || !email || !message) {
      toast.error("All Fields Are Required");
      return;
    }
    const response = await fetch(
      "https://sarbazcvbackend.vercel.app/bin/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          messege: message,
        }),
      }
    );
    if (response.status == 201) {
      toast.success("Thanks For Connecting.");
    }
    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message);
    }
    setEmail("");
    setMessage("");
    setUsername("");
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-hero">
          <span className="contact-label">Get In Touch</span>
          <h1 className="contact-title">
            Let's Create<br />
            <span className="highlight-text">Something Amazing</span><br />
            Together
          </h1>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div className="info-details">
                <h3>Email</h3>
                <a href="mailto:sarbajmalek3456@gmail.com">sarbajmalek3456@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-details">
                <h3>Location</h3>
                <p>Mehsana, Gujarat, India</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">💼</span>
              <div className="info-details">
                <h3>Availability</h3>
                <p>Open for freelance projects</p>
              </div>
            </div>
          </div>

          <form className="contact-form-modern" onSubmit={HandleSendmsg}>
            <div className={`form-group ${isFocused.name || username ? 'focused' : ''}`}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setIsFocused({ ...isFocused, name: true })}
                onBlur={() => setIsFocused({ ...isFocused, name: false })}
                required
              />
            </div>

            <div className={`form-group ${isFocused.email || email ? 'focused' : ''}`}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused({ ...isFocused, email: true })}
                onBlur={() => setIsFocused({ ...isFocused, email: false })}
                required
              />
            </div>

            <div className={`form-group full-width ${isFocused.message || message ? 'focused' : ''}`}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setIsFocused({ ...isFocused, message: true })}
                onBlur={() => setIsFocused({ ...isFocused, message: false })}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        style={{ zIndex: 200 }}
        position="top-right"
        autoClose={2000}
        theme="dark"
        pauseOnHover={false}
      />
    </>
  );
};

export default Contact;
