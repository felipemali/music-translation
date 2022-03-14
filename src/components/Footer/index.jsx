import { Button, Link } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="buttons">
        <Button className="icone">
          <Link href="https://www.youtube.com/user/RiotGamesBrasil">
            <YouTubeIcon className="img-icone" />
          </Link>
        </Button>
        <Button className="icone">
          <Link href="https://twitter.com/LoLegendsBR">
            <TwitterIcon className="img-icone" />
          </Link>
        </Button>
        <Button className="icone">
          <Link href="https://web.facebook.com/LeagueofLegendsBrasil?_rdc=1&_rdr">
            <FacebookIcon className="img-icone" />
          </Link>
        </Button>
        <Button className="icone">
          <Link href="https://www.instagram.com/leagueoflegends/">
            <InstagramIcon className="img-icone" />
          </Link>
        </Button>
        {/* <Button className="icone reddit-mobile">
          <Link href="https://www.reddit.com/r/leagueoflegends/">
            <RedditIcon className="img-icone" />
          </Link>
        </Button> */}
      </div>
      <div className="footer-columns">
        <div className="footer-item-columns">
          <span className="footer-title-see-more">Veja também</span>
          <a
            href="https://www.vagalume.com.br/playlisteiros/"
            className="footer-links"
          >
            Playlisteiros
          </a>
          <a
            href="https://www.vagalume.com.br/news/tags/especiais/"
            className="footer-links"
          >
            Especiais
          </a>
          <a
            href="https://www.vagalume.com.br/browse/hotspots/"
            className="footer-links"
          >
            Hot Sports
          </a>

          <a href="https://vagalume.fm/" className="footer-links">
            Vagalume.FM
          </a>
        </div>
        <div className="footer-item-columns">
          <span className="footer-title-vagalume">Vagalume</span>
          <a
            href="https://vagalume.zendesk.com/hc/pt-br"
            className="footer-links"
          >
            Central de Ajuda
          </a>
          <a href="https://www.vagalume.com.br/terms/" className="footer-links">
            Termos de Uso
          </a>
        </div>
        <div className="footer-item-columns">
          <span className="footer-title-participate">Participe</span>
          <a href="https://meu.vagalume.com.br/" className="footer-links">
            Crie seu perfil
          </a>
          <a href="https://www.vagalume.com.br/add/" className="footer-links">
            Cadastrar letras ou artistas
          </a>
          <a
            href="https://www.vagalume.com.br/legenda/"
            className="footer-links"
          >
            Criar legendas em clipes
          </a>
        </div>
        <div className="footer-item-columns">
          <span className="footer-title-ranking">Ranking</span>
          <a
            href="https://www.vagalume.com.br/top100/artistas/nacional/2022/03/"
            className="footer-links-ranking"
          >
            Top 100 Nacional
          </a>
          <a
            href="https://www.vagalume.com.br/top100/artistas/internacional/2022/03/"
            className="footer-links-ranking"
          >
            Top 100 Internacional
          </a>
        </div>
        <div className="footer-item-columns">
          <span className="footer-vagalume">Vagalume. Música é tudo</span>
          <img
            className="footer-img"
            src="https://www.vagalume.com.br/img/logos/vglfm-app-icon.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
