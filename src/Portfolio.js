// src/Portfolio.jsx
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import videoSrc from "./assets/video.mp4";
import VinylPlayer from "./VinylPlayer";
import { useNavigate } from "react-router-dom";

const quotes = ["BUILD WITH ME"];

const Portfolio = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [currentPin] = useState(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Precious — I build poetic interfaces";

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteInterval);
  }, []);

  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 2000);
    return () => clearInterval(fadeInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => {
        if (index < fullText.length) {
          const updated = prev + fullText[index];
          index++;
          return updated;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getTimeString = (timezone) =>
    new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: timezone,
    }).format(time);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_p6zcxwd",
        "template_rxs0qno",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "FOQr-nq-kFsCFN41k"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setShowPopup(false);
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  const handleCancel = () => {
    setShowPopup(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      {currentPin && <div className="location-pin">{currentPin}</div>}
      <VinylPlayer />

      {/* Full-width video header */}
      <div className="header">
        <video autoPlay loop muted className="video-header">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="typewriter-text">
          {typedText}
          <span className="blinking-cursor">|</span>
        </div>
      </div>

      {/* Moving text */}
      <h1 className="moving-text">walk with me...</h1>

      {/* ── Single column editorial blocks ── */}
      <div className="ed-page">

        {/* Row 1: socials left | tagline center | nav right */}
        <div className="ed-row">
          <div className="ed-cell ed-left">
            <a href="https://www.instagram.com/that.ville/" target="_blank" rel="noopener noreferrer" className="ed-link">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://open.spotify.com/playlist/4VLnFpqNblHKJNSFKRvsMk" target="_blank" rel="noopener noreferrer" className="ed-link">
              <i className="fab fa-spotify"></i> Spotify
            </a>
            <div className="ed-link">
              <i className="fas fa-laptop-code"></i> Software dev
            </div>
          </div>

          <div className="ed-cell ed-center">
            <p className="ed-tagline">Building between art and technology.</p>
            <p className="ed-tagline">Faith, rhythm, and repetition.</p>
            <p className="ed-tagline" onClick={() => setShowPopup(true)} style={{ cursor: "pointer", marginTop: "8px" }}>
              <i className="fas fa-envelope"></i> Email me!
            </p>
          </div>

          <div className="ed-cell ed-right">
            <a href="https://github.com/preciousprestige" target="_blank" rel="noopener noreferrer" className="ed-nav-link">
              <i className="fab fa-github"></i> GITHUB
            </a>
            <span onClick={() => navigate("/works")} className="ed-nav-link">
              📁 SEE WORKS
            </span>
          </div>
        </div>

        {/* Row 2: bearing my yoke — left label, right text */}
        <div className="ed-row">
          <div className="ed-cell ed-left">
            <span className="ed-section-title">BEARING MY YOKE</span>
          </div>
          <div className="ed-cell ed-right" style={{ flex: 2 }}>
            <p className="ed-body image-text">
              Heavy lifting<br />
              what seems hard and far is made easy and close by...<br />
              ...
            </p>
          </div>
        </div>

        {/* Row 3: most high — right aligned label */}
        <div className="ed-row ed-row-right">
          <span className="ed-section-title">MOST HIGH</span>
          <p className="ed-body" style={{ marginTop: "8px" }}>
            My faith is a personal choice, even with the chaos in my mind. I still believe.<br />
            Faith is self-discovery, faith is patience, and faith is continuity.
          </p>
        </div>

        {/* Row 4: tech stack */}
        <div className="ed-row">
          <div className="ed-cell ed-left">
            <span className="ed-section-title">TECH STACK</span>
          </div>
          <div className="ed-cell ed-right" style={{ flex: 2 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {["JAVASCRIPT","REACT JS","REACT NATIVE","VUE JS","MONGO DB","POSTMAN","PHP","GITHUB"].map((label) => (
  <span key={label} className="tech-tag">{label}</span>
              map(({ label, bg, color }) => 
                <span key={label} style={{
                  backgroundColor: bg, color,
                  padding: "4px 10px", fontSize: "11px",
                  fontWeight: "bold", fontFamily: "monospace",
                  letterSpacing: "0.5px",
                }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Row 5: who is precious nav */}
        <div className="ed-row">
          <div className="ed-cell ed-left">
            <span
              onClick={() => navigate("/who-is-precious")}
              className="ed-section-title"
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              PRECIOUS?
            </span>
          </div>
          <div className="ed-cell ed-right" style={{ flex: 2 }}>
            <p className="ed-body">
              <span className={`${showText ? "fade-in" : "fade-out"}`}>
                {quotes[quoteIndex]}
              </span>
            </p>
          </div>
        </div>

      </div>

      <div className="watermark">PRECIOUS</div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h2>Contact Me</h2>
            <form onSubmit={handleSend}>
              <input type="text" name="name" placeholder="Name" className="popup-input"
                value={formData.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Email" className="popup-input"
                value={formData.email} onChange={handleInputChange} required />
              <textarea name="message" placeholder="Message" className="popup-textarea"
                value={formData.message} onChange={handleInputChange} required />
              <div className="popup-buttons">
                <button type="submit" className="popup-send">Send</button>
                <button type="button" onClick={handleCancel} className="popup-cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="footer">
        <span className="timestamp">
          MANILA {getTimeString("Asia/Manila")} | ABUJA {getTimeString("Africa/Lagos")}
        </span>
      </footer>
    </div>
  );
};

export default Portfolio;