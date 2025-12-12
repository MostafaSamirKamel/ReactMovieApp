import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="movie-footer">
      <div className="container">
        <div className="row g-4">
          {/* Brand & Description */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <i className="bi bi-film footer-brand-icon"></i>
              <span className="footer-brand-text">MovieApp</span>
            </div>
            <p className="footer-description">
              Your ultimate destination for movies, TV shows, and entertainment.
              Discover, explore, and stay updated with the latest in cinema.
            </p>
            {/* Social Links */}
            <div className="social-links mt-4">
              <a
                href="#"
                className="social-link facebook"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-link twitter" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="#"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-link youtube" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="social-link tiktok" aria-label="TikTok">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading">Explore</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">
                  <i className="bi bi-chevron-right"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/trending/movies">
                  <i className="bi bi-chevron-right"></i>
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/trending/tv">
                  <i className="bi bi-chevron-right"></i>
                  TV Shows
                </Link>
              </li>
              <li>
                <Link to="/trending/people">
                  <i className="bi bi-chevron-right"></i>
                  People
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading">Company</h5>
            <ul className="footer-links">
              <li>
                <Link to="/about">
                  <i className="bi bi-chevron-right"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="bi bi-chevron-right"></i>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers">
                  <i className="bi bi-chevron-right"></i>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press">
                  <i className="bi bi-chevron-right"></i>
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">Stay Updated</h5>
            <p className="footer-description">
              Subscribe to our newsletter for the latest movie news and updates.
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              
            </form>
            {/* App Download Buttons */}
            <div className="app-buttons">
              <a href="#" className="app-btn">
                <i className="bi bi-apple"></i>
                <div className="app-btn-text">
                  <span className="app-btn-small">Download on</span>
                  <span className="app-btn-large">App Store</span>
                </div>
              </a>
              <a href="#" className="app-btn">
                <i className="bi bi-google-play"></i>
                <div className="app-btn-text">
                  <span className="app-btn-small">Get it on</span>
                  <span className="app-btn-large">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} <Link to="/">MovieApp</Link>. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
