import { Container } from "@mui/material";
import React from "react";
import "./index.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//
//
//
//

// Não está sendo usado
//
//
//
//

const SwiperMusic = (props) => {
  SwiperCore.use([Autoplay]);

  return (
    <Container
      className="swiper-music"
      maxWidth="xl"
      style={{ display: `${props.onDisplay}` }}
    >
      <h3 className="title-collection">Sua coleção</h3>
      <Swiper
        className="swiper"
        // install Swiper modules

        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={6}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        navigation
      >
        {props.salvos.map((music) => (
          <SwiperSlide
            className="b"
            style={{
              transition: "all 0.4s",
              animationTimingFunction: "ease",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url('https://s2.vagalume.com/${music.artista}/images/${music.artista}.jpg')`,
            }}
          >
            <br />
            <span className="a" id="playlist">
              {music.artista}
            </span>
            <br />
            <span className="a">{music.musica}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SwiperMusic;
