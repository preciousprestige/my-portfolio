// Portfolio.js
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import { useLocation, useNavigate } from 'react-router-dom';

const quotes = [
  "HAPPINESS EXISTS WHEN YOU DON'T KNOW A THING",
  "LIFE IS WHAT HAPPENS WHEN YOU'RE BUSY MAKING OTHER PLANS",
  "THE ONLY LIMIT TO OUR REALIZATION OF TOMORROW IS OUR DOUBTS OF TODAY",
  "DO WHAT YOU CAN, WITH WHAT YOU HAVE, WHERE YOU ARE"
];

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

  const getTimeString = (timezone) => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: timezone
    }).format(time);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_p6zcxwd",
      "template_rxs0qno",
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      "FOQr-nq-kFsCFN41k"
    ).then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setShowPopup(false);
    }).catch(() => {
      alert("Failed to send message. Please try again.");
    });
  };

  const handleCancel = () => {
    setShowPopup(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      {location.pathname === '/' && (
        <div className="header">
          <video autoPlay loop muted className="video-header">
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <h1 className="moving-text">WALK WITH ME, I'M INEFFABLE...</h1>

      <div className="links">
        <a href="https://www.instagram.com/that.ville/" target="_blank" rel="noopener noreferrer" className="link-item no-underline">
          <i className="fab fa-instagram"></i> @that.ville
        </a>
        <div 
        className="link-item no-underline" 
        onClick={() => setShowPopup(true)}
        >
          <i className="fas fa-envelope"></i> Contact me!
        </div>

        <div className="link-item no-underline"><i className="fas fa-laptop-code"></i> WebDev</div>

        <a href="https://open.spotify.com/playlist/4VLnFpqNblHKJNSFKRvsMk?si=rXJ9ehM2SRyhuR4q2e5Lng&pt=51b8941126ffa488b41a58a20839ef21&pi=zLjMWhj6TUe4F"
          target="_blank"
           rel="noopener noreferrer" 
           className="link-item no-underline"
           >
          <i className="fab fa-spotify"></i> Spotify
        </a>
        <a href="https://github.com/preciousprestige" target="_blank" rel="noopener noreferrer" className="link-item no-underline">
          <i className="fab fa-github"></i> Github
        </a>
        <div className="link-item no-underline"><i className="fas fa-map-marker-alt"></i> MNL/ABJ</div>
      </div>

      <div className="buttons-container">
        <div className="transition-box blue-border" onClick={() => setShowAboutPopup(true)}>
          <span className={`transition-text ${showText ? 'fade-in' : 'fade-out'}`}>
  Who is Precious?
</span>

        </div>

        <div className="transition-box blue-border" onClick={() => navigate("/works")}>
          <span className={`transition-text ${showText ? 'fade-in' : 'fade-out'}`}>
  Works
</span>

        </div>

        <div className="transition-box blue-border" onClick={() => setShowPopup(true)}>
          <span className={`transition-text ${showText ? 'fade-in' : 'fade-out'}`}>
  CONTACT ME
</span>

        </div>
      </div>

      <hr className="section-divider" />

      <div className="content">
        <div className="bio-container">
          <div className="bio-content">
            <img src={image1} alt="Art 1" className="bio-image" />
            <div className="bio-text">
              <h3>Tech stack</h3>
              <p className="image-text">HTML, CSS, JAVASCRIPT, REACT JS, REACT NATIVE, (VUE JS (still working on it)), PHP</p>
            </div>
          </div>

          <div className="bio-content">
            <div className="bio-text">
              <h3>WHAT I DO?</h3>
              <p className="image-text">
                QUICK LOOK THROUGH THIS PAGE IS ENOUGH? OR LET'S WALK AGAIN? , MY FAITH DO NOT COME IN BETWEEN MY WORK...
              </p>
            </div>
            <img src={image2} alt="Art 2" className="bio-image" />
          </div>

          <div className="bio-content">
            <img src={image3} alt="Art 3" className="bio-image" />
            <div className="bio-text">
              <h3>BEARING MY YOKE</h3>
              <p className="image-text bounce-text">
                IT IS GOOD FOR A MAN TO BEAR THE YOKE WHILE HE IS YOUNG (LAMENTATION 3:27)...<br />
                "FOR MY YOKE IS EASY AND MY BURDEN IS LIGHT.” (Matthew 11:28-30)
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

      {showAboutPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Who Is Precious?</h2>
            <p className="popup-about-text">
              Hey, Precious here — a software developer and creative mind. With a strong foundation in React, React Native, and other web technologies, I blend design and code to build digital experiences that speak deeply. always evolving and innovative. Walk with me.
            </p>
            <div className="popup-buttons">
              <button onClick={() => setShowAboutPopup(false)} className="popup-cancel">Close</button>
            </div>
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
