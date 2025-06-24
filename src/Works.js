// src/Works.js
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import TuamduImg from "./assets/tuamdu.jpg";
import TuamduVid from "./assets/tuamdu.mp4";
import globeImage from "./assets/precious-globe.png";

const Works = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo((prev) => !prev);
    }, 61000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (showVideo && video) {
      video.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    } else if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, [showVideo]);

  return (
    <div className="works-container">
      {/* BACK BUTTON TOP LEFT */}
      <button onClick={() => navigate("/")} className="back-button top-left">
        ←
      </button>

      <h1 className="moving-text">MY WORKS...</h1>
       <br />
              randomly uploaded works...
              <br />
      {/* 3 LINES AFTER HEADER */}
      <div className="header-lines">
        <hr />
        <hr />
        <hr />
      </div>

      <div className="bio-container">
        <div className="bio-content">
          {/* IMAGE/VIDEO SWITCH */}
          <div className="media-container">
            {showVideo ? (
              <video
                ref={videoRef}
                className="works-video"
                onEnded={() => setShowVideo(false)}
              >
                <source src={TuamduVid} type="video/mp4" />
                your browser does not support the video tag
              </video>
            ) : (
              <img src={TuamduImg} alt="Work 1" className="bio-image" />
            )}
          </div>

          <div className="bio-text">
            <h3>
              A Queuing Appointment and Patient Records Management with Inventory
              System
            </h3>
            <p className="image-text moving-description">
              this website was made to automate the manual system at trinity
              university of asia medical and dental unit...
              <br />
              Built with vue.js
              <br />
              <a
                href="https://tuamdu.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="here-link"
              >
                HERE
              </a>
            </p>

            
          </div>
        </div>

        {/* LINE AFTER EACH WORK */}
        <div className="divider-line">
          <hr />
        </div>
      </div>

      {/* FLOATING GLOBE */}
      <img src={globeImage} alt="spinning globe" className="floating-globe" />

      <div className="watermark">PRECIOUS</div>
    </div>
  );
};

export default Works;
