import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom';

function Item(seccion)
{
    return (
        <Paper sx={{display: "flex", flexDirection: "column"}}>
           
            <Typography textAlign={"center"} gutterBottom variant="h5" color={"red"} component="div" mb={4}>
            {seccion.titulo}
          </Typography>
          <Box sx={{margin:"auto"}}>
          <img src={seccion.imagen}  width={500} height={300}  alt=""/>
          </Box>
            
            
        <Box sx={{margin:"auto"}}>
        <Link to={seccion.link} style={{ textDecoration: 'none' }} target={"_blank"}   >
        <Button variant="contained" size="small" color="primary" sx={{mt: 3, mb:3}}>
          Productos
        </Button>
        </Link>
        </Box>
       
        </Paper>
    )
}
export default Item