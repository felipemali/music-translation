import { Button, Container } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./index.css";

const Letter = (props) => {
  const [views, setViews] = useState();
  const [changeLanguage, setChangeLanguage] = useState();
  const language = useMediaQuery("(max-width: 425px)");
  const buttonSx = useMediaQuery("(max-width: 767px)");
  const [nameButton, setNameButton] = useState("Portuguese");

  useEffect(() => {
    if (props.data.nameArtist) {
      axios
        .get(
          `https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${props.data.nameArtist}&extra=rank&nolyrics=1`
        )
        .then((response) => {
          setViews(response.data.art.rank.views);
        });
    }
  });

  useEffect(() => {
    if (props.data.musicFound == undefined) {
      return "";
    } else {
      setChangeLanguage(props.data.letterOrigin);
    }
  }, [props]);

  const switchingLanguages = () => {
    changeLanguage == props.data.letterOrigin
      ? setChangeLanguage(props.data.translate)
      : setChangeLanguage(props.data.letterOrigin);

    nameButton == "Portuguese"
      ? setNameButton("English")
      : setNameButton("Portuguese");
  };

  return (
    <div
      className="letter "
      style={{
        display: `${props.onLetter}`,
      }}
    >
      <Container
        className="container-letter shapedividers_com-8239"
        maxWidth="false"
      >
        <Container maxWidth="lg" className="data-artist">
          <div className="content">
            <img
              className="img"
              src={`https://s2.vagalume.com/${props.artist}/images/${props.artist}.jpg`}
              alt=""
            />
            <span className="artist-data">{props.data.nameArtist}</span>
            <span className="views">{views} views</span>
          </div>
        </Container>

        <Container maxWidth="lg">
          <div className="position-colums">
            <div className="container-letterr">
              <span className="name-music" id="letterr">
                {props.data.nameMusic}
              </span>
              {buttonSx ? (
                <Button
                  className="button-save-letter"
                  onClick={switchingLanguages}
                >
                  {nameButton}
                </Button>
              ) : (
                ""
              )}

              <span className="letter-music">{changeLanguage}</span>
              <Button
                className="button-save-letter"
                onClick={() =>
                  props.saves({
                    artista: props.artist,
                    musica: props.music,
                  })
                }
              >
                {"salvar Letra"}
              </Button>
            </div>
            <div className="translation-letter">
              <span className="title-translation">Tradução</span>
              <p className="letter-music">{props.data.translate}</p>
            </div>
            {language ? (
              <span className="views-mobile">{views} views</span>
            ) : (
              ""
            )}
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Letter;
