import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SwiperMovies from "../components/SwiperMovies";

function HomePage() {
  const [trend, setTrend] = useState([]);
  const [movie, setMovie] = useState([]);
  const [serial, setSerial] = useState([]);

  async function getTrends(setTrend) {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=10927fb143f2a18c417e39a39f340a01&page=1`
      )
      .then((res) => {
        setTrend(res.data.results);
      })
      .catch((err) => console.log(err));
  }
  async function getMovie(setMovie) {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=10927fb143f2a18c417e39a39f340a01&language=en-US&page=1`
      )
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((err) => console.log(err));
  }
  async function getSerials(setSerial) {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=10927fb143f2a18c417e39a39f340a01&language=en-US&page=1`
      )
      .then((res) => {
        setSerial(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getTrends(setTrend);
    getMovie(setMovie);
    getSerials(setSerial);
  }, []);

  return (
    <section className="homepage">
      <div className="container">
        <Link to='/trends/pages/1'><h2>В тренде</h2></Link>
        <SwiperMovies props={trend} />
        <Link to='//movies/pages/1'><h2>Популярные фильмы</h2></Link>
        <SwiperMovies props={movie} tit="movie" />
        <Link to='/tv/pages/1'><h2>Популярные сериалы</h2></Link>
        <SwiperMovies props={serial} tit="tv" />  
      </div>
    </section>
  );
}

export default HomePage;
