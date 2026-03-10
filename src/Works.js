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
import TEWImg from "./assets/TEW img.png";
import TEWVid from "./assets/TEW.mp4";

const allProjects = [
  {
    id: 1,
    title: "A Queuing Appointment and Patient Records Management with Inventory System",
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

const newProjects = [
  {
    id: "n1",
    title: "THE EXQUISITE WOMAN",
    video: TEWVid,
    image: TEWImg,
    description: "Curated fashion for the modern woman. Elegant, bold, and uniquely you.",
    tech: "Built with React.js",
    link: "https://tew-eight.vercel.app/",
  },
  {
    id: "n2",
    title: "HALL OF FAME",
    video: null,
    image: null, // add import once zero-limit file is in assets
    description: "2D design depicting the Wakanda Forever master dog studio.",
    tech: "Built with React.js",
    link: "#",
  },
  {
    id: "n3",
    title: "PROJECT TITLE",
    video: null,
    image: null,
    description: "Project description goes here...",
    tech: "Built with ...",
    link: "#",
  },
];

const ProjectRow = ({ projects, sectionId }) => {
  const [showVideoMap, setShowVideoMap] = useState({});
  const videoRefs = useRef({});
  const timers = useRef({});

  useEffect(() => {
    const timersRef = timers.current;
    projects.forEach((p) => startLoop(p.id));
    return () => Object.values(timersRef).forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startLoop = (id) => {
    setShowVideoMap((prev) => ({ ...prev, [id]: false }));
    timers.current[id] = setTimeout(() => {
      setShowVideoMap((prev) => ({ ...prev, [id]: true }));
    }, 3000);
  };

  const handleVideoEnded = (id) => {
    setShowVideoMap((prev) => ({ ...prev, [id]: false }));
    timers.current[id] = setTimeout(() => {
      setShowVideoMap((prev) => ({ ...prev, [id]: true }));
    }, 3000);
  };

  return (
    <div className="horizontal-scroll-wrapper">
      {projects.map((project, idx) => (
        <React.Fragment key={`${sectionId}-${project.id}`}>
          <div className="project-card">
            <div className="media-container">
              {project.video && project.image ? (
                showVideoMap[project.id] ? (
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
                  <img src={project.image} alt={project.title} className="project-image" />
                )
              ) : project.image ? (
                <img src={project.image} alt={project.title} className="project-image" />
              ) : (
                <div className="new-media-placeholder">
                  <span style={{ color: "#aaa", fontSize: "13px", fontFamily: "monospace" }}>
                    video / image
                  </span>
                </div>
              )}
            </div>
            <div className="project-text">
              <h3>{project.title}</h3>
              <p className="project-description">
                {project.description}
                <br />
                {project.tech}
                <br />
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="here-link">
                  HERE
                </a>
              </p>
            </div>
          </div>
          {idx < projects.length - 1 && <div className="vertical-divider"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

const Works = () => {
  const navigate = useNavigate();

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
        <hr /><hr /><hr />
      </div>

      <ProjectRow projects={allProjects} sectionId="s1" />

      <h1 className="moving-text">E COMMERCE / 2D & 3D PROJECTS...</h1>
      <br />
      SELECTED PROJECTS...
      <br />
      <div className="header-lines">
        <hr /><hr /><hr />
      </div>

      <ProjectRow projects={newProjects} sectionId="s2" />

      <img src={globeImage} alt="spinning globe" className="floating-globe" />
      <div className="watermark">PRECIOUS</div>
    </div>
  );
};

export default Works;