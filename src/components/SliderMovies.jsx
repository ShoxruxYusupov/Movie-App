import { Skeleton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SliderMovies({ props, tit }) {
  let list = [1, 2, 3, 4, 5]
  return (
    <div className="movies">
      {!(props.length === 0)
        ? props.map((item, index) => {
            return (
              <Link
                className="aL"
                to={`/${ item.media_type || tit }/${item.id}`}
                key={index}
              >
                <div className="film">
                  <div className="img">
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <span
                      className={
                        Math.round(item.vote_average * 10) >= 75
                          ? "rate rate-good"
                          : Math.round(item.vote_average * 10)
                          ? "rate rate-norm"
                          : "rate rate-low"
                      }
                    >
                      {Math.round(item.vote_average * 10)
                        ? Math.round(item.vote_average * 10)
                        : "No"}
                    </span>
                    <h3>{item.title || item.name}</h3>
                    <p>{item.release_date || item.first_air_date}</p>
                  </div>
                </div>
              </Link>
            );
          })
        : list.map((e) => {
            return (
              <Skeleton
                  key={e}
                  animation="wave"
                  variant="rectangular"
                  width={220}
                  height={350}
                />
            );
          })}
    </div>
  );
}

export default SliderMovies;
