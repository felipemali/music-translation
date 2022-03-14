import { Box, Container, IconButton, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import LeftNavbar from "../LeftNavbar";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../img/logo.png";
import "./index.css";

const Menuu = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const buttonsCenter = [
    "Top 100",
    "Estilos",
    "A-Z",
    "Notícias",
    "Hot Spots",
    "Vagalume.FM",
  ];
  return (
    <div className="menu ">
      <Container className="container-menu" maxWidth="xl">
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <img
            className="logo"
            src={"https://www.vagalume.com.br/img/logos/vglfm-app-icon.webp"}
            alt=""
          />

          <div className="buttons">
            {buttonsCenter.map((button) => (
              <Button className="button">{button}</Button>
            ))}
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "flex",
              marginTop: "auto",
              marginBottom: "auto",
              md: "none",
            },
          }}
        >
          <IconButton
            className="menu-icon-sm"
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <img className="logo" src={Logo} alt="" />
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {buttonsCenter.map((button) => (
              <MenuItem key={button} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{button}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Button className="button-register">{"Cadastra-se"}</Button>

        {/* <LeftNavbar setOnDisplay={props.setOnDisplay} /> */}
      </Container>
    </div>
  );
};
export default Menuu;
