import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./SearchPage.css";
import SliderMovies from "../components/SliderMovies";
import { Pagination } from "@mui/material";

function SearchPage() {
  const [type, setType] = useState("movie");
  const [colection, setCollection] = useState([]);
  const [count, setCount] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [id, setId] = useState(1);

  async function getSearch() {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/${type}?api_key=10927fb143f2a18c417e39a39f340a01&language=ru&query=${searchText}&page=${id}`
      )
      .then((res) => {
        setCollection(res.data.results);
        // console.log(res);
        setCount(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getSearch();
  }, [type, id]);

  return (
    <div className="search">
      <div className="container">
        <div className="input">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submit");
              setSearchText(e.target[0].value);
              getSearch();
            }}
          >
            <input type="text" placeholder="Search..." />
          </form>
          <select onChange={(e) => setType(e.target.value)}>
            <option value="movie">Movie</option>
            <option value="tv">Serials</option>
          </select>
        </div>
        <SliderMovies props={colection} tit={type} />
        <div className="pagin">
          <Pagination
            count={count}
            color="secondary"
            onChange={(e) => {
              setId(e.target.textContent);
              if (window.scrollY > 0) {
                window.scroll(0, 0);
              }
            }}
            hideNextButton
            hidePrevButton
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
