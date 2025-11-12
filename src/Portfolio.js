// src/Portfolio.jsx
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
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

      <div className="header">
        <video autoPlay loop muted className="video-header">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="typewriter-text">
          {typedText}
          <span className="blinking-cursor">|</span>
        </div>
      </div>

      <h1 className="moving-text">walk with me...</h1>

      {/* Social Icons */}
      <div className="links social-links">
        <a
          href="https://www.instagram.com/that.ville/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-item no-underline"
        >
          <i className="fab fa-instagram"></i> @that.ville
        </a>
        <div className="link-item no-underline" onClick={() => setShowPopup(true)}>
          <i className="fas fa-envelope"></i> Contact me!
        </div>
        <div className="link-item no-underline">
          <i className="fas fa-laptop-code"></i> Software dev
        </div>
        <a
          href="https://open.spotify.com/playlist/4VLnFpqNblHKJNSFKRvsMk"
          target="_blank"
          rel="noopener noreferrer"
          className="link-item no-underline"
        >
          <i className="fab fa-spotify"></i> Spotify
        </a>
        <a
          href="https://github.com/preciousprestige"
          target="_blank"
          rel="noopener noreferrer"
          className="link-item no-underline"
        >
          <i className="fab fa-github"></i> Github
        </a>
        <div className="link-item no-underline">
          <i className="fas fa-map-marker-alt"></i> 
        </div>
      </div>

      {/* Quotes above text line */}
      <p className={`quote ${showText ? "fade-in" : "fade-out"}`}>
        {quotes[quoteIndex]}
      </p>

      {/* Text line (Precious | Projects📁) */}
      <div
        className="buttons-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <p
          onClick={() => navigate("/who-is-precious")}
          className="text-lg font-semibold text-white cursor-pointer transition-all duration-300 hover:tracking-wider hover:text-pink-400 hover:drop-shadow-[0_0_10px_rgba(255,192,203,0.7)]"
          style={{ margin: 0 }}
        >
          precious?
        </p>

        <p
          onClick={() => navigate("/works")}
          className="text-lg font-semibold text-white cursor-pointer transition-all duration-300 hover:tracking-wider hover:text-pink-400 hover:drop-shadow-[0_0_10px_rgba(255,192,203,0.7)]"
          style={{ margin: 0 }}
        >
          projects 📁
        </p>
      </div>

      <hr className="section-divider" />

      {/* Bio section */}
      <div className="content">
        <div className="bio-container">
          <div className="bio-content">
            <img src={image1} alt="Art 1" className="bio-image" />
            <div className="bio-text">
              <h3>Tech stack</h3>
              <p className="image-text">
                JAVASCRIPT, REACT JS, REACT NATIVE, VUE JS, MONGO DB, POSTMAN,PHP, GITHUB.
              </p>
            </div>
          </div>

          <div className="bio-content">
            <img src={image2} alt="Merged Art" className="bio-image" />
            <div className="bio-text">
              <h3>BEARING MY YOKE</h3>
              <p className="image-text">
                Heavy lifting<br />
                what seems hard and far is made easy and close by...
                <br />
                ...
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
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="popup-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="popup-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="popup-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <div className="popup-buttons">
                <button type="submit" className="popup-send">
                  Send
                </button>
                <button type="button" onClick={handleCancel} className="popup-cancel">
                  Cancel
                </button>
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