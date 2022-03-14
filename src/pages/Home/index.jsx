import Menuu from "../../components/Menu";
import React, { useEffect, useState } from "react";
import ContentMusict from "../../components/ContentMusic";
import Letter from "../../components/Letter";
import axios from "axios";
import SwiperMusic from "../../components/SwiperMusic";
import Footer from "../../components/Footer";

const Home = () => {
  const [artist, setArtist] = useState();
  const [music, setMusic] = useState();
  const [salvos, setSalvos] = useState([]);
  const [data, setData] = useState({});
  const [onDisplay, setOnDisplay] = useState("none");
  const [onLetter, setOnLetter] = useState("none");

  useEffect(() => {
    if (music) {
      axios
        .get(
          `https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${artist}&mus=${music}`
        )
        .then((response) => {
          const dataArtist = response.data;
          if (dataArtist.type === "notfound") {
            setData({});
            return;
          }
          setData({
            letterOrigin: dataArtist.mus[0].text,
            translate: dataArtist.mus[0].translate[0].text,
            nameArtist: dataArtist.art.name,
            nameMusic: dataArtist.mus[0].name,
            id: dataArtist.mus[0].id,
            musicFound: dataArtist.type,
          });
          console.log(response.data);
        });
    }
  }, [music]);
  const saves = (newLetter) => {
    setSalvos([...salvos, newLetter]);
  };

  return (
    <div>
      <Menuu setOnDisplay={setOnDisplay} />
      <ContentMusict
        artistt={setArtist}
        musicArtist={setMusic}
        saves={saves}
        salvos={salvos}
        setOnDisplay={setOnDisplay}
        setOnLetter={setOnLetter}
      />
      {data.id && (
        <Letter
          artist={artist}
          music={music}
          data={data}
          onLetter={onLetter}
          saves={saves}
          views={data?.views}
        />
      )}
      {/* <SwiperMusic salvos={salvos} onDisplay={onDisplay} data={data} /> */}
      <Footer />
    </div>
  );
};

export default Home;
