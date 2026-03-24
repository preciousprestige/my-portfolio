// src/Portfolio.jsx
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import videoSrc from "./assets/video.mp4";
import VinylPlayer from "./VinylPlayer";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
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
    const fadeInterval = setInterval(() => setShowText((prev) => !prev), 2000);
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
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: true, timeZone: timezone,
    }).format(time);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    emailjs.send("service_p6zcxwd", "template_rxs0qno", {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    }, "FOQr-nq-kFsCFN41k")
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setShowPopup(false);
      })
      .catch(() => alert("Failed to send message. Please try again."));
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
          {typedText}<span className="blinking-cursor">|</span>
        </div>
      </div>

      {/* Sliding moving text */}
      <h1 className="moving-text">walk with me...</h1>

      {/* ── Editorial rows ── */}
      <div className="ed-page">

        {/* Row 1: Socials | Email + GitHub | precious? + projects */}
        <div className="ed-row">
          <div className="ed-cell ed-left">
            <a href="https://www.instagram.com/that.ville/" target="_blank" rel="noopener noreferrer" className="ed-link">
              <i className="fab fa-instagram" style={{ color: "#C13584" }}></i> Instagram
            </a>
            <a href="https://open.spotify.com/playlist/4VLnFpqNblHKJNSFKRvsMk" target="_blank" rel="noopener noreferrer" className="ed-link">
              <i className="fab fa-spotify" style={{ color: "#1DB954" }}></i> Spotify
            </a>
            <div className="ed-link">
              <i className="fas fa-laptop-code"></i> Software dev
            </div>
          </div>

          <div className="ed-cell ed-center">
            <div onClick={() => setShowPopup(true)} className="ed-link" style={{ cursor: "pointer" }}>
              <i className="fas fa-envelope"></i> Email me!
            </div>
            <a href="https://github.com/preciousprestige" target="_blank" rel="noopener noreferrer" className="ed-link">
              <i className="fab fa-github"></i> GITHUB
            </a>
          </div>

          <div className="ed-cell ed-right">
            <span onClick={() => navigate("/who-is-precious")} className="ed-nav-link">
              👨‍💻 precious?
            </span>
            <span onClick={() => navigate("/works")} className="ed-nav-link">
              📁 projects
            </span>
          </div>
        </div>

        {/* Row 2: Bearing my yoke */}
        <div className="ed-row">
          <div className="ed-cell ed-left">
            <span className="ed-section-title">bearing my yoke</span>
          </div>
          <div className="ed-cell" style={{ flex: 2 }}>
            <p className="ed-body image-text">
              Heavy lifting<br />
              what seems hard and far is made easy and close by...<br />
              ...
            </p>
          </div>
        </div>

        {/* Row 3: Tech stack */}
        <div className="ed-row">
          <div className="ed-cell ed-left">
            <span className="ed-section-title">tech stack</span>
          </div>
          <div className="ed-cell" style={{ flex: 2 }}>
            <div className="tech-tags-row">
              {[
                { label: "JAVASCRIPT", bg: "#f7df1e", color: "#5a4e00" },
                { label: "REACT JS", bg: "#61dafb", color: "#004d5e" },
                { label: "REACT NATIVE", bg: "#20232a", color: "#61dafb" },
                { label: "VUE JS", bg: "#42b883", color: "#1a4a34" },
                { label: "MONGO DB", bg: "#4db33d", color: "#1a3d15" },
                { label: "POSTMAN", bg: "#ff6c37", color: "#5e1c00" },
                { label: "PHP", bg: "#8993be", color: "#1a1e3a" },
                { label: "GITHUB", bg: "#333", color: "#ccc" },
              ].map(({ label, bg, color }) => (
                <span key={label} className="tech-tag" style={{ backgroundColor: bg, color }}>
                  {label}
                </span>
              ))}
            </div>
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
        <span className={`quote ${showText ? "fade-in" : "fade-out"}`}>
          BUILD WITH ME
        </span>
      </footer>
    </div>
  );
};

export default Portfolio;