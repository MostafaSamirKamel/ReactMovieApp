import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Loading from "../../Components/Loading/Loading";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css";

export default function MovieDetails() {
  // url -> https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}
  // api key -> ba307be1d768f57972f0b725b4b15100

  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  async function getMovieDetails() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ba307be1d768f57972f0b725b4b15100`
    );
    setMovieDetails(response.data);
  }

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  return (
    <div className="movie-details-page">
      <Navbar />

      {movieDetails ? (
        <>
          {/* Backdrop Section */}
          <div
            className="movie-backdrop"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
            }}
          >
            <div className="backdrop-overlay"></div>
          </div>

          {/* Main Content */}
          <section className="movie-content">
            <div className="container">
              <div className="row">
                {/* Poster Column */}
                <div className="col-lg-4 col-md-5">
                  <div className="poster-wrapper">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                      alt={movieDetails.title}
                      className="movie-poster-img"
                    />
                    <div className="poster-rating">
                      <i className="bi bi-star-fill"></i>
                      <span>{movieDetails.vote_average.toFixed(1)}</span>
                      <small>/10</small>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="action-buttons">
                    <button className="btn btn-watch">
                      <i className="bi bi-play-fill"></i> Watch Trailer
                    </button>
                    <div className="secondary-actions">
                      <button
                        className="btn btn-action"
                        title="Add to Favorites"
                      >
                        <i className="bi bi-heart"></i>
                      </button>
                      <button
                        className="btn btn-action"
                        title="Add to Watchlist"
                      >
                        <i className="bi bi-bookmark"></i>
                      </button>
                      <button className="btn btn-action" title="Share">
                        <i className="bi bi-share"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className="col-lg-8 col-md-7">
                  <div className="movie-details-content">
                    {/* Title & Tagline */}
                    <h1 className="movie-main-title">{movieDetails.title}</h1>
                    {movieDetails.tagline && (
                      <p className="movie-tagline">"{movieDetails.tagline}"</p>
                    )}

                    {/* Genres */}
                    <div className="genre-list">
                      {movieDetails.genres.map((genre) => (
                        <span className="genre-item" key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                    </div>

                    {/* Quick Info */}
                    <div className="quick-info">
                      <div className="info-item">
                        <i className="bi bi-calendar3"></i>
                        <span>
                          {new Date(movieDetails.release_date).getFullYear()}
                        </span>
                      </div>
                      <div className="info-item">
                        <i className="bi bi-clock"></i>
                        <span>
                          {Math.floor(movieDetails.runtime / 60)}h{" "}
                          {movieDetails.runtime % 60}m
                        </span>
                      </div>
                      <div className="info-item">
                        <i className="bi bi-globe"></i>
                        <span>
                          {movieDetails.original_language.toUpperCase()}
                        </span>
                      </div>
                      <div className="info-item status-released">
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{movieDetails.status}</span>
                      </div>
                    </div>

                    {/* Overview */}
                    <div className="overview-section">
                      <h4 className="section-heading">
                        <i className="bi bi-file-text"></i> Overview
                      </h4>
                      <p className="overview-text">{movieDetails.overview}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="stats-grid">
                      <div className="stat-card">
                        <div className="stat-icon">
                          <i className="bi bi-cash-stack"></i>
                        </div>
                        <div className="stat-info">
                          <span className="stat-label">Budget</span>
                          <span className="stat-value">
                            ${(movieDetails.budget / 1000000).toFixed(0)}M
                          </span>
                        </div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-icon revenue">
                          <i className="bi bi-graph-up-arrow"></i>
                        </div>
                        <div className="stat-info">
                          <span className="stat-label">Revenue</span>
                          <span className="stat-value">
                            ${(movieDetails.revenue / 1000000).toFixed(1)}M
                          </span>
                        </div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-icon popularity">
                          <i className="bi bi-fire"></i>
                        </div>
                        <div className="stat-info">
                          <span className="stat-label">Popularity</span>
                          <span className="stat-value">
                            {movieDetails.popularity.toFixed(1)}
                          </span>
                        </div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-icon votes">
                          <i className="bi bi-people-fill"></i>
                        </div>
                        <div className="stat-info">
                          <span className="stat-label">Votes</span>
                          <span className="stat-value">
                            {movieDetails.vote_count}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Production Companies */}
                    <div className="production-section">
                      <h4 className="section-heading">
                        <i className="bi bi-building"></i> Production
                      </h4>
                      <div className="production-companies">
                        {movieDetails.production_companies.map((company) => (
                          <span className="company-tag" key={company.id}>
                            {company.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External Links */}
                    <div className="external-links">
                      {movieDetails.homepage && (
                        <a
                          href={movieDetails.homepage}
                          className="btn btn-link-external"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-globe2"></i> Official Website
                        </a>
                      )}
                      {movieDetails.imdb_id && (
                        <a
                          href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                          className="btn btn-link-imdb"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="bi bi-film"></i> IMDb
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}

      <Footer />
    </div>
  );
}
