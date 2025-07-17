// src/WhoIsPrecious.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import globe from "./assets/precious-globe.png";
import polaroidimg from "./assets/polaroid-img.jpg";
import VinylPlayer from "./VinylPlayer";
import "./style.css";

export default function WhoIsPrecious() {
  const navigate = useNavigate();

  return (
    <div className="who-container">
      <div className="archive-tag">📂 Archive</div>

      <button className="back-button" onClick={() => navigate("/portfolio")}>←</button>

      <img src={globe} alt="Globe" className="floating-globe" />

      <div className="folder-tooltip">ThIS IS A FOLDER IN MY BRAIN.</div>
      <div className2="folder-tooltip"> got an idea? a project? or just wanna build something cool?</div>

      <div className="who-card">
        <div className="who-content">
          <div className="emoji-eyes">👀</div>

          <div className="who-description">
            <p>
               <strong>Hey, Precious here...</strong> 
               </p>
            <p>
a software developer and creative mind. With a strong foundation in React, React Native, and other web technologies, I blend design and code to build digital experiences that speak deeply
            </p>
            <p>
                 Always evolving and innovative. Walk with me....</p>
           <p>   I relocated to Manila to pursue a degree in Information Technology majoring in mobile, web and software development at Trinity University of Asia.
              I design minimalist, aesthetic websites for creative organizations and individuals, using the power of design to communicate effectively without complexity.
               interned at the ICTO at Trinity University of Asia, where I strengthened my skills in React, contributing, building, and maintaining in-house websites.
               worked as a Front-end engineer for a  couple growth-stage start-ups using React to develop the user interface for users, admin, and mobile site.
            </p>
            <p>This page archives a slice of who I am—playful, thoughtful, and intentional. A little godly corner of the internet. Stay awhile.</p>
            <span className="blinking-cursor">|</span>
          </div>

          <div className="polaroid-wrapper">
            <div className="tape tape-top-left"></div>
            <div className="tape tape-top-right"></div>
            <img src={polaroidimg} alt="Polaroid" className="polaroid-img" />
          </div>

          <div className="double-divider">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      <VinylPlayer />
    </div>
  );
}
