import React from 'react';
import ContentCard from '../ContentCard/ContentCard';
import './ContentSection.css';

const ContentSection = ({ title, viewAllLink, items, type = "movie" }) => {
  return (
    <section className="content-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {viewAllLink && (
          <a href={viewAllLink} className="section-link">
            View All <i className="fas fa-chevron-right"></i>
          </a>
        )}
      </div>
      <div className="content-grid">
        {items.map((item, index) => (
          <ContentCard key={index} item={item} type={type} />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;