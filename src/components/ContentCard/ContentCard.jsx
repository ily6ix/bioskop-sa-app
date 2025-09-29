import React, { useState } from 'react';
import './ContentCard.css';

const ContentCard = ({ item, type }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`content-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item.badge && <div className="card-badge">{item.badge}</div>}
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-meta">
          <span>{item.year || item.episode}</span>
          <span>{item.duration || item.timeLeft}</span>
        </div>
        {isHovered && (
          <div className="card-overlay">
            <button className="btn btn-primary overlay-btn">
              <i className="fas fa-play"></i>
            </button>
            <button className="btn btn-secondary overlay-btn">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;