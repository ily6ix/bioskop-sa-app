import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">NEW EPISODES</span>
        <h1 className="hero-title">Cosmic Odyssey: The Final Frontier</h1>
        <p className="hero-description">
          In a galaxy torn by war, a lone explorer discovers an ancient power that could change 
          the fate of the universe forever. The epic conclusion to the award-winning series.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">
            <i className="fas fa-play"></i> Play Now
          </button>
          <button className="btn btn-secondary">
            <i className="fas fa-info-circle"></i> More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;