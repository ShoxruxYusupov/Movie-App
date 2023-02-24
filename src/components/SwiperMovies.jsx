// import Swiper core and required modules
import { Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Own styles
import "./SwiperMovies.css";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

function SwiperMovies({ props, tit }) {
  let list = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Swiper
      modules={[Scrollbar]}
      slidesPerView={7}
      scrollbar={{
        draggable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        578: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      }}
    >
      {!(props.length === 0)
        ? props.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link className="aL" to={`/${item.media_type || tit || "serials"}/${item.id}`}>
                  <div className="film_swipe">
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
              </SwiperSlide>
            );
          })
        : list.map((e) => {
            return (
              <SwiperSlide key={e}>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={170}
                  height={300}
                />
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
}

export default SwiperMovies;
