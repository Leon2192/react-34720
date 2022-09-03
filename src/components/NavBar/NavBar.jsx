import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function NavBar() {
  // Este componente contiene una barra de navegación e importa mi CartWidget mostrandome en pantalla el icono de carrito.
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={"/"}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/category/jewelery"} style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Joyería
              </Button>
            </Link>
            <Link
              to={"/category/electronics"}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Electrónica
              </Button>
            </Link>
            <Link
              to={"/category/men's clothing"}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Ropa masculina
              </Button>
            </Link>
            <Link
              to={"/category/women's clothing"}
              style={{ textDecoration: "none" }}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Ropa femenina
              </Button>
            </Link>
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
