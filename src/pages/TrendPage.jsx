import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PaginationComp from "../components/PaginationComp";
import SliderMovies from "../components/SliderMovies";

function TrendPage() {
  const { pageid } = useParams();

  const [count, setCount] = useState(10);
  const [id, setId] = useState(pageid);
  const [movies, setMovies] = useState([]);

  async function getTrends(setCount, id) {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=10927fb143f2a18c417e39a39f340a01&page=${id}`
      )
      .then((res) => {
        setMovies(res.data.results);
        setCount(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getTrends(setCount, id);
  }, [id]);
  return (
    <div className="trend">
      <div className="container tr">
        <h1>All Trends</h1>
        <SliderMovies props={movies} />
        <div className="pagin">
          <PaginationComp
            title="trends"
            id={id}
            count={count}
            color="secondary"
            setId={setId}
          />
        </div>
      </div>
    </div>
  );
}

export default TrendPage;
