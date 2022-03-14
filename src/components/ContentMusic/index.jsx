import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import "./index.css";
import imgMusica from "../../img/musica.png";

const ContentMusic = ({ artistt, musicArtist, setOnLetter }) => {
  const [nameArtist, setNameArtist] = useState("");
  const [nameMusic, setNameMusic] = useState("");
  const [button, setButton] = useState("inline-flex");
  const [error, setError] = useState("");

  const data = (artist, music) => {
    if (nameArtist == "") {
      setError({
        inputArtist: " 1px 1 px 20px 3px red",
        inputMusic: " 1px 5px 40px 0px #616296",
      });
    } else if (nameMusic == "") {
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
      setNameArtist("");
      setNameMusic("");
    }
  };

  return (
    <div className="content-music ">
      <Container className="container-content-music" maxWidth="false">
        <div className="content">
          <span className="text">
            Find the <span className="word-color">lyrics</span> of your
            <span className="word-color"> favorite </span> song here
            <div className="container-input">
              <div className="inputs">
                <input
                  style={{
                    boxShadow: `${error.inputArtist}`,
                  }}
                  value={nameArtist}
                  type="text"
                  className="input"
                  placeholder="Enter artist name"
                  onChange={(e) => setNameArtist(e.target.value)}
                />

                <input
                  style={{ boxShadow: `${error.inputMusic}` }}
                  value={nameMusic}
                  type="text"
                  className="input-music"
                  placeholder="Enter the song name"
                  onChange={(e) => setNameMusic(e.target.value)}
                />
                <Button
                  href="#letterr"
                  className="button-search"
                  onClick={() => {
                    data(nameArtist, nameMusic);
                    setOnLetter("inline");
                    setButton("none");
                  }}
                >
                  {"Search"}
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
          {"Search for a song"}
        </Button>
      </Container>
    </div>
  );
};

export default ContentMusic;
