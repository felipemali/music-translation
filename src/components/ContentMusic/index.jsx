import { Button, Container, Modal } from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import imgMusica from "../../img/musica.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const ContentMusic = ({ artistt, musicArtist, setOnLetter }) => {
  const [typeValue, setTypeValue] = useState("");
  const [musica, setMusica] = useState("");
  const [button, setButton] = useState("inline-flex");
  const [error, setError] = useState("");

  const data = (artist, music) => {
    if (typeValue == "") {
      setError({
        inputArtist: " 1px 1 px 20px 3px red",
        inputMusic: " 1px 5px 40px 0px #616296",
      });
    } else if (musica == "") {
      setError({
        inputArtist: " 1px 5px 40px 0px #616296",
        inputMusic: " 1px 3px 25px 0px red",
      });
    } else {
      setError({
        inputArtist: " 1px 5px 40px 0px #616296",
        inputMusic: " 1px 5px 40px 0px #616296",
      });
      artistt(artist);
      musicArtist(music);
      setTypeValue("");
      setMusica("");
    }
  };

  return (
    <div className="content-music ">
      <Container className="container-content-music" maxWidth="false">
        <div className="content">
          <span className="text">
            Descubra a <span className="word-color">letra</span> da sua música
            <span className="word-color"> preferida </span> aqui
            
            <div className="container-input">
              <div className="inputs">
                <input
                  style={{
                    boxShadow: `${error.inputArtist}`,
                  }}
                  value={typeValue}
                  type="text"
                  className="input"
                  placeholder="Digite o nome do artista"
                  onChange={(e) => setTypeValue(e.target.value)}
                />

                <input
                  style={{ boxShadow: `${error.inputMusic}` }}
                  value={musica}
                  type="text"
                  className="input-music"
                  placeholder="Digite o nome da música"
                  onChange={(e) => setMusica(e.target.value)}
                />
                <Button
                  href="#letterr"
                  className="button-search"
                  onClick={() => {
                    data(typeValue, musica);
                    setOnLetter("inline");
                    setButton("none");
                  }}
                >
                  {"Buscar"}
                </Button>
              </div>
            </div>
          </span>
          <div className="container-img">
            <img className="img-music" src={imgMusica} alt="" />
          </div>
        </div>
        <Button
          href="#letterr"
          className="button-search-music"
          style={{
            display: `${button}`,
          }}
        >
          {"Faça a Busca de uma Música"}
        </Button>
      </Container>
    </div>
  );
};

export default ContentMusic;
