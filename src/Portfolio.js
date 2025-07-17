// src/Portfolio.jsx
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import videoSrc from "./assets/video.mp4";
import VinylPlayer from "./VinylPlayer";
import { useNavigate } from "react-router-dom";

const quotes = [
  "HAPPINESS EXISTS WHEN YOU DON'T KNOW A THING",
  "DO WHAT YOU CAN, WITH WHAT YOU HAVE, WHERE YOU ARE",
  "HAVE POWER FOR THE DAY YOU NEED TO SPEAK",
];

const fakePins = [
  "📍 Visitor from 🇵🇭 Manila",
  "📍 Visitor from 🇳🇬 Abuja",
  "📍 Visitor from 🇳🇬 Lagos",
  "📍 Visitor from 🇳🇬 Minna",
  "📍 Visitor from 🇺🇸 NYC",
  "📍 Visitor from 🇬🇧 London",
  "📍 Visitor from 🇫🇷 Paris",
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [currentPin, setCurrentPin] = useState(null);

  useEffect(() => {
    const pinInterval = setInterval(() => {
      const randomPin = fakePins[Math.floor(Math.random() * fakePins.length)];
      setCurrentPin(randomPin);
      setTimeout(() => setCurrentPin(null), 3000);
    }, 7000);
    return () => clearInterval(pinInterval);
  }, []);

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

      <div className="header">
        <video autoPlay loop muted className="video-header">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <h1 className="moving-text">WALK WITH ME, I'M INEFFABLE...</h1>

      <div className="links social-links">
        <a href="https://www.instagram.com/that.ville/" target="_blank" rel="noopener noreferrer" className="link-item no-underline">
          <i className="fab fa-instagram"></i> @that.ville
        </a>
        <div className="link-item no-underline" onClick={() => setShowPopup(true)}>
          <i className="fas fa-envelope"></i> Contact me!
        </div>
        <div className="link-item no-underline"><i className="fas fa-laptop-code"></i> WebDev</div>
        <a href="https://open.spotify.com/playlist/4VLnFpqNblHKJNSFKRvsMk" target="_blank" rel="noopener noreferrer" className="link-item no-underline">
          <i className="fab fa-spotify"></i> Spotify
        </a>
        <a href="https://github.com/preciousprestige" target="_blank" rel="noopener noreferrer" className="link-item no-underline">
          <i className="fab fa-github"></i> Github
        </a>
        <div className="link-item no-underline"><i className="fas fa-map-marker-alt"></i> MNL/ABJ</div>
      </div>

      <div className="buttons-container">
        <div className="transition-box blue-border" onClick={() => navigate("/who-is-precious")}>
          <span className={`transition-text ${showText ? "fade-in" : "fade-out"}`}>WHO IS PRECIOUS</span>
        </div>
        <div className="transition-box blue-border" onClick={() => navigate("/works")}>
          <span className={`transition-text ${showText ? "fade-in" : "fade-out"}`}>PROJECTS</span>
        </div>
        <div className="transition-box blue-border" onClick={() => setShowPopup(true)}>
          <span className={`transition-text ${showText ? "fade-in" : "fade-out"}`}>CONTACT ME</span>
        </div>
      </div>

      <hr className="section-divider" />

      <div className="content">
        <div className="bio-container">
          <div className="bio-content">
            <img src={image1} alt="Art 1" className="bio-image" />
            <div className="bio-text">
              <h3>Tech stack</h3>
              <p className="image-text">JAVASCRIPT, REACT JS, REACT NATIVE, (VUE JS (still working on it)), PHP</p>
            </div>
          </div>
          <div className="bio-content">
            <div className="bio-text">
              <h3>WHAT I DO?</h3>
              <p className="image-text">Quick look through this page is enough? Or let's walk again? My faith does not come between my work...</p>
            </div>
            <img src={image2} alt="Art 2" className="bio-image" />
          </div>
          <div className="bio-content">
            <img src={image3} alt="Art 3" className="bio-image" />
            <div className="bio-text">
              <h3>BEARING MY YOKE</h3>
              <p className="image-text bounce-text">
                It is good for a man to bear the yoke while he is young (Lamentations 3:27)...<br />
                "For my yoke is easy and my burden is light.” (Matthew 11:28-30)
              </p>
            </div>
          </div>
        </div>
        <div className="watermark">PRECIOUS</div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h2>Contact Me</h2>
            <form onSubmit={handleSend}>
              <input type="text" name="name" placeholder="Name" className="popup-input" value={formData.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Email" className="popup-input" value={formData.email} onChange={handleInputChange} required />
              <textarea name="message" placeholder="Message" className="popup-textarea" value={formData.message} onChange={handleInputChange} required />
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
          Manila: {getTimeString("Asia/Manila")} | Abuja: {getTimeString("Africa/Lagos")}
        </span>
        <p className="quote">{quotes[quoteIndex]}</p>
      </footer>
    </div>
  );
};

export default Portfolio;
