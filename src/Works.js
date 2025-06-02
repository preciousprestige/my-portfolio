// src/Works.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import TuamduImg from "./assets/tuamdu.jpg";
import TuamduVid from "./assets/tuamdu.mp4";
// import Image2 from "./assets/your-image2.jpg";
// import Video2 from "./assets/your-video2.mp4";

const Works = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => navigate("/")} className="back-button">
        ← Back
      </button>

      <h1 className="moving-text">MY WORKS</h1>

      <div className="bio-container">
        <div className="bio-content">
          <img src={TuamduImg} alt="Work 1" className="bio-image" />
          <div className="bio-text">
            <h3>A Queuing Appointment and Patient Records Management with Inventory System</h3>
            <p className="image-text moving-description">
              this website was made to automate the manual system at trinity university of asia...
            </p>
            <video className="works-video" controls>
              <source src={TuamduVid} type="video/mp4" />
              your browser does not support the video tag
            </video>
          </div>
        </div>

        {/* 
        <div className="bio-content">
          <img src={Image2} alt="Work 2" className="bio-image" />
          <div className="bio-text">
            <h3>PROJECT TITLE 2</h3>
            <p className="image-text moving-description">
              Your moving description here for work 2...
            </p>
            <video controls className="bio-video">
              <source src={Video2} type="video/mp4" />
            </video>
          </div>
        </div>
        */}
      </div>

      <div className="watermark">PRECIOUS</div>
    </div>
  );
};

export default Works;
