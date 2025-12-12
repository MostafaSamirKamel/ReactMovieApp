import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import { useEffect } from "react";
import "./Home.css";

export default function Home() {
  // url -> https://api.themoviedb.org/3/trending/movie/
  // time window -> week / day
  // api key -> ba307be1d768f57972f0b725b4b15100

  const [movies, setMovies] = useState(null);

  async function getMovies() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=ba307be1d768f57972f0b725b4b15100"
    );
    setMovies(response.data.results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      {movies ? (
        <section className="movies-section">
          <div className="container pt-5">
            <div className="row g-4">
              {/* Movie Cards */}
              {movies.map((movie) => (
                <Card movieDetail={movie} key={movie.id}/>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
      <Footer />
    </div>
  );
}
