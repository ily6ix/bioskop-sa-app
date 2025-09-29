import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>StreamVibe</h3>
            <p className="footer-description">
              The ultimate streaming experience with thousands of movies, TV shows, and exclusive originals.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV Shows</a></li>
              <li><a href="#">New & Popular</a></li>
              <li><a href="#">My List</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Do Not Sell My Info</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <ul className="footer-links">
              <li><a href="#">Account & Billing</a></li>
              <li><a href="#">Plans & Pricing</a></li>
              <li><a href="#">Supported Devices</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; 2023 StreamVibe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;