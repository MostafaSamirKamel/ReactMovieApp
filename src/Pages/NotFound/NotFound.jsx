import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Navbar />

      <section className="not-found-section">
        <div className="container">
          <div className="not-found-content">
            {/* 404 Number with Film Effect */}
            <div className="error-number">
              <span className="digit">4</span>
              <div className="film-reel">
                <i className="bi bi-film"></i>
              </div>
              <span className="digit">4</span>
            </div>

            {/* Error Message */}
            <h1 className="error-title">Scene Not Found</h1>
            <p className="error-description">
              Oops! Looks like this scene was left on the cutting room floor.
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Action Buttons */}
            <div className="error-actions">
              <Link to="/" className="btn btn-home">
                <i className="bi bi-house-fill"></i>
                Back to Home
              </Link>
              <button
                className="btn btn-back"
                onClick={() => window.history.back()}
              >
                <i className="bi bi-arrow-left"></i>
                Go Back
              </button>
            </div>

            {/* Fun Suggestions */}
            <div className="suggestions">
              <p className="suggestions-title">While you're here, try these:</p>
              <div className="suggestions-list">
                <Link to="/" className="suggestion-item">
                  <i className="bi bi-fire"></i>
                  <span>Trending Movies</span>
                </Link>
                <Link to="/" className="suggestion-item">
                  <i className="bi bi-star-fill"></i>
                  <span>Top Rated</span>
                </Link>
                <Link to="/" className="suggestion-item">
                  <i className="bi bi-clock-history"></i>
                  <span>Coming Soon</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Film Elements */}
          <div className="floating-elements">
            <i className="bi bi-camera-reels floating-icon icon-1"></i>
            <i className="bi bi-film floating-icon icon-2"></i>
            <i className="bi bi-ticket-perforated floating-icon icon-3"></i>
            <i className="bi bi-play-circle floating-icon icon-4"></i>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
