import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-tv',
      title: '4K Ultra HD',
      description: 'Experience stunning picture quality with our extensive library of 4K content, optimized for your screen.'
    },
    {
      icon: 'fas fa-download',
      title: 'Download & Go',
      description: 'Download your favorite shows and movies to watch offline, anytime and anywhere.'
    },
    {
      icon: 'fas fa-user-friends',
      title: 'Multiple Profiles',
      description: 'Create up to 6 personalized profiles so everyone can have their own unique streaming experience.'
    }
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">
            <i className={feature.icon}></i>
          </div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;