// src/Intro.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import introBackground from "./assets/intro-bg.jpg"; 

const Intro = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowText(prev => !prev), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="intro-page"
      style={{
        backgroundImage: `url(${introBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="transition-box blue-border" onClick={() => navigate("/portfolio")}>
        <span className={`transition-text ${showText ? "fade-in" : "fade-out"}`}>
          WALK WITH ME
        </span>
      </div>
    </div>
  );
};

export default Intro;
