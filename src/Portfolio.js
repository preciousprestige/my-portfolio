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

      {/* ── Editorial layout ── */}
      <div className="editorial-layout">

        {/* LEFT — socials */}
        <div className="editorial-left">
          <div className="editorial-block">
            <a href="https://www.instagram.com/that.ville/" target="_blank" rel="noopener noreferrer" className="editorial-link">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://open.spotify.com/playlist/4VLnFpqNblHKJNSFKRvsMk" target="_blank" rel="noopener noreferrer" className="editorial-link">
              <i className="fab fa-spotify"></i> Spotify
            </a>
            <div className="editorial-link">
              <i className="fas fa-laptop-code"></i> Software dev
            </div>
          </div>

          {/* Bearing my yoke */}
          <div className="editorial-block">
            <h3 className="editorial-label">BEARING MY YOKE</h3>
            <p className="editorial-body image-text">
              Heavy lifting<br />
              what seems hard and far is made easy and close by...<br />
              ...
            </p>
          </div>

          {/* Tech stack */}
          <div className="editorial-block">
            <h3 className="editorial-label">Tech stack</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
              {[
                { label: "JAVASCRIPT", bg: "#f7df1e", color: "#000" },
                { label: "REACT JS", bg: "#61dafb", color: "#000" },
                { label: "REACT NATIVE", bg: "#20232a", color: "#61dafb" },
                { label: "VUE JS", bg: "#42b883", color: "#fff" },
                { label: "MONGO DB", bg: "#4db33d", color: "#fff" },
                { label: "POSTMAN", bg: "#ff6c37", color: "#fff" },
                { label: "PHP", bg: "#8993be", color: "#fff" },
                { label: "GITHUB", bg: "#333", color: "#fff" },
              ].map(({ label, bg, color }) => (
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

        {/* RIGHT — bio + nav */}
        <div className="editorial-right">

          {/* tagline + quote */}
          <div className="editorial-block">
            <p className="editorial-tagline">Building between art and technology.</p>
            <p className="editorial-tagline">Faith, rhythm, and repetition.</p>
            <p className={`editorial-quote ${showText ? "fade-in" : "fade-out"}`}>
              {quotes[quoteIndex]}
            </p>
          </div>

          {/* Contact + GitHub */}
          <div className="editorial-block editorial-row">
            <div onClick={() => setShowPopup(true)} className="editorial-link" style={{ cursor: "pointer" }}>
              <i className="fas fa-envelope"></i> Email me!
            </div>
            <a href="https://github.com/preciousprestige" target="_blank" rel="noopener noreferrer" className="editorial-link">
              <i className="fab fa-github"></i> GITHUB
            </a>
          </div>

          {/* Nav */}
          <div className="editorial-block editorial-nav">
            <span onClick={() => navigate("/who-is-precious")} className="editorial-nav-link">precious?</span>
            <span onClick={() => navigate("/works")} className="editorial-nav-link">see works</span>
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