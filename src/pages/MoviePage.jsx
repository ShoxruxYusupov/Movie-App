import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Filter from "../components/Filter";
import PaginationComp from "../components/PaginationComp";
import SliderMovies from "../components/SliderMovies";

function MoviePage() {
  const { pagen } = useParams();

  const [count, setCount] = useState(10);
  const [id, setId] = useState(pagen);
  const [movies, setMovies] = useState([]);
  const [List, setList] = useState([]);

  async function getTrends(setCount, id) {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=10927fb143f2a18c417e39a39f340a01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${id}&with_genres=${List}`
      )
      .then((res) => {
        setMovies(res.data.results);
        if (res.data.total_pages > 500) {
          setCount(500);
        } else {
          setCount(res.data.total_pages);
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getTrends(setCount, id);
  }, [id, List]);
  return (
    <div className="trend">
      <div className="container">
        <div className="filter-terr">
          <Filter setList={setList} List={List} tit="movie" />
        </div>
        <div className="content-terr">
          <h1>Popular Movies</h1>
          <SliderMovies props={movies} tit="movie" />
          <div className="pagin">
            <PaginationComp
              title="movies"
              id={id}
              count={count}
              color="secondary"
              setId={setId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
