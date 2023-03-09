import React from 'react';
import './Home.css';
import { Box } from '@mui/material';
import { Grid, Typography, Button } from '@material-ui/core';


function Home() {
return (
    <div>
    <Grid className='fundo' container direction="row" justifyContent="center" alignItems='center' >
        <Grid alignItems='center' item xs={6}>
        <Box paddingX={20} paddingBottom="20px">
            <div className='nomes'>
            <Typography variant="h3" gutterBottom color='textPrimary' component="h3" align='center' style={{ fontWeight: "bold" }}>Bem vindo (a)!</Typography>
            <Typography variant="h5" gutterBottom color='textPrimary' component="h5" align='center' style={{ fontWeight: "bold" }}>Escreva aqui sua opiniões !</Typography>
            </div>
        
        </Box>
        <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "black", color: "white" }}>Visualizar Postagens</Button>

        </Box>
        </Grid>
        <Grid item xs={6} className="Gridimg">
            <img className="img" src="https://i.imgur.com/iVhncTi.png" alt="Logo Blog"/>
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>

    </Grid>
    </div>
);
}

export default Home;