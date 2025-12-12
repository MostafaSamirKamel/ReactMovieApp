import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { userToken, userData, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav
      className={`navbar navbar-expand-lg movie-navbar sticky-top ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <i className="bi bi-film brand-icon"></i>
          <span>MovieApp</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {/* Home Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="bi bi-house-fill me-2"></i>
                Home
              </NavLink>
            </li>

            {/* Trending Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-fire trending-icon me-2"></i>
                Trending
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/trending/movies">
                    <i className="bi bi-camera-reels-fill me-2"></i>
                    Movies
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/trending/tv">
                    <i className="bi bi-tv-fill me-2"></i>
                    TV Shows
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/trending/people">
                    <i className="bi bi-people-fill me-2"></i>
                    People
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right Side - Auth Buttons or User Menu */}
          {userToken ? (
            /* User is logged in - Show user dropdown */
            <div className="dropdown user-dropdown">
              <button
                className="btn btn-user-menu dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="user-avatar">
                  <i className="bi bi-person-fill"></i>
                </div>
              </button>
              <ul className="dropdown-menu dropdown-menu-end user-dropdown-menu">
                <li className="user-info-header">
                  <div className="user-info-avatar">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <div className="user-info-details">
                    <span className="user-name">
                      {userData?.name || "User"}
                    </span>
                    <span className="user-email">
                      {userData?.email || "user@email.com"}
                    </span>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    <i className="bi bi-person me-2"></i>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/watchlist">
                    <i className="bi bi-bookmark me-2"></i>
                    Watchlist
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/favorites">
                    <i className="bi bi-heart me-2"></i>
                    Favorites
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item logout-item"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            /* User is not logged in - Show auth buttons */
            <div className="d-flex gap-3 auth-buttons">
              <Link to="/signup" className="btn btn-auth-signup">
                <i className="bi bi-person-plus-fill me-2"></i>
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-auth-login">
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
