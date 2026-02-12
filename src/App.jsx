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
    const timer = setTimeout(() => setShowIntro(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-glow" />
          <div className="intro-content">
            <div className="intro-logo-ring">
              <span className="intro-logo-letter">K</span>
            </div>
            <div className="intro-text-block">
              <p className="intro-tagline">PURE VEG • SOYA CHAAP</p>
              <h1 className="intro-title">THE KING CHAAP</h1>
              <p className="intro-subtitle">
                Street-style flavour. Royal-level indulgence.
              </p>
            </div>
            <div className="intro-divider">
              <span className="intro-line left" />
              <span className="intro-dot" />
              <span className="intro-line right" />
            </div>
            <p className="intro-bottom-note">Grilling your cravings...</p>
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
