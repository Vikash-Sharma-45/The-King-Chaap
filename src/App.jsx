import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Franchise from "./pages/Franchise";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="intro-overlay">
          {/* Background layers */}
          <div className="intro-bg-layer" />
          <div className="intro-grain" />

          {/* Cinematic letterbox bars */}
          <div className="intro-letterbox-top" />
          <div className="intro-letterbox-bottom" />

          {/* Central ambient glow */}
          <div className="intro-center-glow" />

          {/* Floating ember particles */}
          <div className="intro-embers">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="intro-ember" />
            ))}
          </div>

          {/* Horizontal light sweep */}
          <div className="intro-light-sweep" />

          {/* Main content */}
          <div className="intro-content">
            {/* Logo with expanding rings */}
            <div className="intro-logo-container">
              <div className="intro-logo-ring-outer" />
              <div className="intro-logo-ring-inner" />
              <div className="intro-logo-circle">
                <span className="intro-logo-icon">🍴</span>
              </div>
            </div>

            {/* Established badge */}
            <div className="intro-est-badge">EST. 2012 • NEW DELHI</div>

            {/* Title */}
            <div className="intro-title-block">
              <h1 className="intro-title">THE KING CHAAP</h1>
              <span className="intro-title-accent">Pure Veg • Soya Chaap</span>
            </div>

            {/* Ornamental divider */}
            <div className="intro-ornament">
              <div className="intro-ornament-line" />
              <div className="intro-ornament-diamond" />
              <div className="intro-ornament-line right" />
            </div>

            {/* Tagline */}
            <p className="intro-tagline">
              Street-style flavour, Royal indulgence
            </p>
          </div>

          {/* Bottom loader */}
          <div className="intro-loader">
            <span className="intro-loader-text">Preparing your experience</span>
            <div className="intro-loader-bar">
              <div className="intro-loader-fill" />
            </div>
          </div>
        </div>
      )}

      {!showIntro && (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/franchise" element={<Franchise />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
