// src/Works.js
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import TuamduImg from "./assets/tuamdu.jpg";
import TuamduVid from "./assets/tuamdu.mp4";
import globeImage from "./assets/precious-globe.png";
import simbaconsult from "./assets/simbaconsult .mp4";
import simbaImage from "./assets/simbaImg.jpg";
import sanctifiedVideo from "./assets/sanctified.mp4";
import sanctifiedImage from "./assets/sanctified.jpg";

const allProjects = [
  {
    id: 1,
    title:
      "A Queuing Appointment and Patient Records Management with Inventory System",
    video: TuamduVid,
    image: TuamduImg,
    description: `This website was made to automate the manual system at Trinity University of Asia Medical and Dental Unit...`,
    tech: "Built with Vue.js",
    link: "https://tuamdu.xyz/",
  },
  {
    id: 2,
    title: "SIMBA CONSULT",
    video: simbaconsult,
    image: simbaImage,
    description: `A simple website for Simba Engineering Consultant`,
    tech: "Built with React.js",
    link: "https://preciousprestige.github.io/simba-consultant/",
  },
  {
    id: 3,
    title: "SANCTIFIED & CHILLED",
    video: sanctifiedVideo,
    image: sanctifiedImage,
    description: `A simple website for Sanctified & Chilled podcast`,
    tech: "Built with React.js",
    link: "https://preciousprestige.github.io/sanctified-and-chIlled/",
  },
];

const Works = () => {
  const navigate = useNavigate();
  const [showVideoMap, setShowVideoMap] = useState({});
  const videoRefs = useRef({});
  const timers = useRef({});

  useEffect(() => {
    const timersRef = timers.current;

    allProjects.forEach((project) => {
      startImageThenVideoLoop(project.id);
    });

    return () => {
      Object.values(timersRef).forEach(clearTimeout);
    };
  }, []);

  const startImageThenVideoLoop = (projectId) => {
    setShowVideoMap((prev) => ({ ...prev, [projectId]: false }));

    const timeout = setTimeout(() => {
      setShowVideoMap((prev) => ({ ...prev, [projectId]: true }));
    }, 3000);

    timers.current[projectId] = timeout;
  };

  const handleVideoEnded = (projectId) => {
    setShowVideoMap((prev) => ({ ...prev, [projectId]: false }));

    const timeout = setTimeout(() => {
      setShowVideoMap((prev) => ({ ...prev, [projectId]: true }));
    }, 3000);

    timers.current[projectId] = timeout;
  };

  return (
    <div className="works-container">
      <button onClick={() => navigate("/portfolio")} className="back-button top-left">
        ←
      </button>

      <h1 className="moving-text">MY PROJECTS...</h1>
      <br />
      SELECTED PROJECTS...
      <br />

      <div className="header-lines">
        <hr />
        <hr />
        <hr />
      </div>

      {/* Horizontal Scroll Container */}
      <div className="horizontal-scroll-wrapper">
        {allProjects.map((project, idx) => (
          <React.Fragment key={project.id}>
            <div className="project-card">
              <div className="media-container">
                {showVideoMap[project.id] ? (
                  <video
                    ref={(el) => (videoRefs.current[project.id] = el)}
                    className="works-video"
                    autoPlay
                    muted
                    playsInline
                    onEnded={() => handleVideoEnded(project.id)}
                  >
                    <source src={project.video} type="video/mp4" />
                    your browser does not support the video tag
                  </video>
                ) : (
                  <img
                    src={project.image}
                    alt={`Work ${project.id}`}
                    className="project-image"
                  />
                )}
              </div>

              <div className="project-text">
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                  <br />
                  {project.tech}
                  <br />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="here-link"
                  >
                    HERE
                  </a>
                </p>
              </div>
            </div>

            {/* Vertical Divider Line (not after last project) */}
            {idx < allProjects.length - 1 && (
              <div className="vertical-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <img src={globeImage} alt="spinning globe" className="floating-globe" />
      <div className="watermark">PRECIOUS</div>
    </div>
  );
};

export default Works;