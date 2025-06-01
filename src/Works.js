// src/Works.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; 

const Works = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <video autoPlay loop muted className="video-header">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <button onClick={() => navigate("/")} className="back-button">
        ← Back
      </button>

      <h1 className="moving-text">MY WORKS</h1>

      <div className="bio-container">
        {/* Replace these with your actual work entries */}
        <div className="bio-content">
          <img src="/your-image1.jpg" alt="Work 1" className="bio-image" />
          <div className="bio-text">
            <h3>A Queuing Appointment and Patient Records Management with Inventory System </h3>
            <p className="image-text moving-description">
              Your moving description here for work 1...
            </p>
            <video controls className="bio-video">
              <source src="/your-video1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="bio-content">
          <img src="/your-image2.jpg" alt="Work 2" className="bio-image" />
          <div className="bio-text">
            <h3>PROJECT TITLE 2</h3>
            <p className="image-text moving-description">
              Your moving description here for work 2...
            </p>
            <video controls className="bio-video">
              <source src="/your-video2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="watermark">PRECIOUS</div>
    </div>
  );
};

export default Works;
