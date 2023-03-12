import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabPostagem.css';
import ListaPostagem from '../listaPostagem/ListaPostagem';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre mim</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Sou casada, me tornei mãe em 2022, tenho 4 gatos. Minha maior motivação é minha família.
Atualmente me tornei Desenvolvedora Java Full Stack, onde participei de um BootCamp da Generation Brasil, pude desenvolver conhecimentos técnicos como Java | Spring Boot | MySQL | HTML | CSS | JavaScript | Git | GitHub | React e habilidades comportamentais como mentalidade de crescimento, gestão de tempo, orientação a detalhes, pro atividade e muitos outros. Estou em busca de uma oportunidade onde eu possa contribuir com meus conhecimentos e evoluir junto com a empresa.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;