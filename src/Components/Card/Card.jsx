import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ movieDetail }) {
  const {
    id,
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    media_type,
    original_language,
    genre_ids,
  } = movieDetail;

  // Genre ID to name mapping
  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };


  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="movie-card">
        {/* Movie Poster */}
        <div className="movie-poster">
          <img src={posterUrl} alt={title} className="poster-img" />

          {/* Rating Badge */}
          <div className="rating-badge">
            <i className="bi bi-star-fill"></i>
            <span>{vote_average}</span>
          </div>

          {/* Overlay on hover */}
          <div className="movie-overlay">
            <button className="btn btn-play">
              <i className="bi bi-play-fill"></i>
            </button>

            <div className="overlay-buttons">
              <button className="btn btn-icon" title="Add to Favorites">
                <i className="bi bi-heart"></i>
              </button>
              <button className="btn btn-icon" title="Add to Watchlist">
                <i className="bi bi-bookmark"></i>
              </button>
              <Link to={`/moviedetails/${id}`} className="btn btn-icon" title="More Info">
                <i className="bi bi-info-circle"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Movie Info */}
        <div className="movie-info">
          <h5 className="movie-title">{title}</h5>

          {/* Description - 2 lines */}
          <p className="movie-description">{overview.slice(0, 100)}</p>

          {/* Genre Tags */}
          <div className="movie-genres">
            {genre_ids.slice(0, 3).map((id) => (
              <span className="genre-tag" key={id}>
                {genreMap[id] || "Movie"}
              </span>
            ))}
          </div>

          {/* Meta info with year and language */}
          <div className="movie-meta">
            <span className="movie-year">
              <i className="bi bi-calendar3"></i> {new Date(release_date).getFullYear()}
            </span>
            <span className="movie-lang">
              <i className="bi bi-globe"></i> {original_language}
            </span>
            <span className="movie-rating-text">
              <i className="bi bi-star-fill"></i> {vote_average}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
