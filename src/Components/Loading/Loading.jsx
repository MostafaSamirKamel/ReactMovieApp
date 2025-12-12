import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loader">
        {/* Modern spinner with film icon */}
        <div className="spinner-wrapper">
          <div className="spinner-ring"></div>
          <div className="spinner-ring delay"></div>
          <div className="film-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
            </svg>
          </div>
        </div>

        {/* Wavy Movie App text */}
        <div className="wavy-text">
          <span style={{ animationDelay: "0s" }}>M</span>
          <span style={{ animationDelay: "0.1s" }}>o</span>
          <span style={{ animationDelay: "0.2s" }}>v</span>
          <span style={{ animationDelay: "0.3s" }}>i</span>
          <span style={{ animationDelay: "0.4s" }}>e</span>
          <span style={{ animationDelay: "0.5s" }}>&nbsp;</span>
          <span style={{ animationDelay: "0.6s" }}>A</span>
          <span style={{ animationDelay: "0.7s" }}>p</span>
          <span style={{ animationDelay: "0.8s" }}>p</span>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-text">Loading...</span>
        </div>
      </div>
    </div>
  );
}
