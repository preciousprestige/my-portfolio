// src/VinylPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';
import vinylImg from './assets/vinyl.png'; // make sure the path is correct
import vibeAudio from './assets/vibe.mp3';
import './style.css';

const VinylPlayer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // 🔉 soft ambient vibe
      audioRef.current.loop = true;
      isVisible ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isVisible]);

  return (
    <div className="vinyl-player-container">
      <div className="vinyl-toggle" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '🎶' : '📀'}
      </div>

      {isVisible && (
        <div className="vinyl-embed">
          <img src={vinylImg} alt="vinyl spinning" className="vinyl-disc" />
          <audio ref={audioRef} src={vibeAudio} />
        </div>
      )}
    </div>
  );
};

export default VinylPlayer;
