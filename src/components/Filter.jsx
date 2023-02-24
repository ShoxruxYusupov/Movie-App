import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Filter.css";

function Filter({ setList, tit }) {
  const [genreList, setGenreList] = useState([]);
  let listOfGenre = []

  function getGenres() {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${tit}/list?api_key=10927fb143f2a18c417e39a39f340a01&language=en-US`
      )
      .then((res) => setGenreList(res.data.genres))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getGenres();
  }, []);

  function handleFilter( item ){
    listOfGenre = genreList.map((i) => {
        if(i.id === item.id && i.is_selected){
            i.is_selected = false
        } else if(i.id === item.id){
            i.is_selected = true
        }
        return i;
    })
    setGenreList(listOfGenre)

    let newSelectedGenres = genreList.filter(i => {
        return i.is_selected
    })

    let ids = newSelectedGenres.map((i) => {
        return i.id
    })
    setList(ids)
  }

  return (
    <>
      <h3>Select filters</h3>
      <ul>
        {genreList
          ? genreList.map((item, index) => {
              return (
                <li
                  className={`${item.is_selected ? 'genreLI is_selected': "genreLI"}`}
                  key={index}
                  onClick={() => handleFilter(item)}
                >
                  {item.name}
                </li>
              );
            })
          : "Loading..."}
      </ul>
    </>
  );
}

export default Filter;
