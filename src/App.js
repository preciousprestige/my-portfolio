// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Works from './Works';

import './style.css';

function App() {
  return (
  <Router basename="/my-portfolio">
  <Routes>
   <Route path="/" element={<Intro />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/works" element={<Works />} />
  </Routes>
</Router>

  );
}

export default App;
