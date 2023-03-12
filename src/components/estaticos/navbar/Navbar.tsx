import {  Box,  AppBar,  Toolbar,  IconButton,  Button,  Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useLocalStorage from "react-use-localstorage";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuário deslogado");
    navigate("/login");
  }

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="login" className="text-decorator-none">
              <Button color="inherit">inicio</Button>
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="Temas" className="text-decorator-none">
              <Button color="inherit">temas</Button>
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="postagem" className="text-decorator-none">
              <Button color="inherit">postagem</Button>
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="cadastrousuario" className="text-decorator-none">
              <Button color="inherit">cadastro</Button>
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="text-decorator-none">
              <Button color="inherit">Login</Button>
            </Link>
          </Typography>
          <Link to="/Login">
            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                <Button color="inherit">Logout</Button>
              </Typography>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
