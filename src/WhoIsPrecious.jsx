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

      <button className="back-button" onClick={() => navigate("/portfolio")}>
        ←
      </button>

      <img src={globe} alt="Globe" className="floating-globe" />

      <div className="folder-tooltip"></div>
      <div className="folder-tooltip" style={{ top: '60px' }}>
        got an idea? a project? or just wanna build something cool?
      </div>

      <div className="who-card">
        <div className="who-content">
          <div className="emoji-eyes">👀</div>

          <div className="who-description">
            <p>
              <strong>Hey, Precious here...</strong>
            </p>
            <p>a software developer mainly. React and React Native majorly.</p>
            <p>Always evolving and innovative. Walk with me....</p>
            <p></p>
            <p></p>
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