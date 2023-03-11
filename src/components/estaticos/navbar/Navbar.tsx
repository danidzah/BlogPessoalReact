import { Box, AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="login" className='text-decorator-none'>
                    <Button color="inherit">inicio</Button>
                    </Link>
                    </Typography>
                    <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="Temas" className="text-decorator-none">
                    <Button color="inherit">temas</Button>
                    </Link>
                    </Typography>                    
                    <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="postagem" className='text-decorator-none'>
                    <Button color="inherit">postagem</Button>
                    </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="cadastrousuario" className='text-decorator-none'>
                    <Button color="inherit">cadastro</Button>
                    </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to='/' className='text-decorator-none'>
                    <Button color="inherit">Login</Button>
                    </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar