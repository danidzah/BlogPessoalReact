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
            <Typography variant="h3" gutterBottom color='textPrimary' component="h3" align='center' className='titulo'>Bem vindo (a)!</Typography>
            <Typography variant="h5" gutterBottom color='textPrimary' component="h5" align='center' className='titulo'>Escreva aqui sua opiniões !</Typography>
            </div>
        
        </Box>
        <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" className="botao">Visualizar Postagens</Button>

        </Box>
        </Grid>
        <Grid item xs={6} className="Gridimg">
            <img className="img" src="https://i.imgur.com/iVhncTi.png" alt="foto Blog"/>
        </Grid>
        <Grid xs={12} className='img'>
        </Grid>

    </Grid>
    </div>
);
}

export default Home;