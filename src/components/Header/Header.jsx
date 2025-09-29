import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <i className="fas fa-play-circle logo-icon"></i>
            StreamVibe
          </Link>
          
          <nav className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/movies" className={`nav-link ${isActive('/movies') ? 'active' : ''}`}>
              Movies
            </Link>
            <Link to="/tv-shows" className={`nav-link ${isActive('/tv-shows') ? 'active' : ''}`}>
              TV Shows
            </Link>
            <Link to="/my-list" className={`nav-link ${isActive('/my-list') ? 'active' : ''}`}>
              My List
            </Link>
          </nav>
          
          <div className="header-actions">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="user-avatar">
              <span>JS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;