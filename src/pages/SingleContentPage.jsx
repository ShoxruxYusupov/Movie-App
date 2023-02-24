import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./SingleContentPage.css";
import Rate from "./../images/rate.png";

function SingleContentPage() {
  const { type, id } = useParams();
  const [media, setMedia] = useState({});

  function getSingle() {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=10927fb143f2a18c417e39a39f340a01&language=ru`
      )
      .then((res) => setMedia(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getSingle();
  }, []);

  return (
    <div className="SingleContentPage">
      <img
        id="back"
        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${media.backdrop_path}`}
        alt=""
      />
      <div id="black"></div>
      <div className="one_film">
        <div className="container">
          <div className="film_content">
            <img
              id="poster"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${media.poster_path}`}
              alt=""
            />
            <div className="film_info">
              <h1>{media.original_title || media.original_name}</h1>
              <div className="genres">
                {
                  media.genres ? media.genres.map((item, index) => {
                      return <span key={index}>{item.name}</span>
                  }) : ""
                }
                <span id="time">
                  {
                    media.last_episode_to_air ? `Seasons: ${media.last_episode_to_air.season_number}` : `${~~(media.runtime / 60)}h ${media.runtime % 60}m`
                  }
                </span>
              </div>
              <div className="rage">
                <h2>RATING: </h2>
                <div className="voterage">
                  <img id="voter" src={Rate} alt="" />
                  <p id="vote">{Math.round(media.vote_average * 10)}</p>
                </div>
              </div>
              <div className="desc">
                <p>{media.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleContentPage;
