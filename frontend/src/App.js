import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage.js';
import Portfolio from './Pages/Portfolio.js';
import About from './Pages/About.js';

import './CSS/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
