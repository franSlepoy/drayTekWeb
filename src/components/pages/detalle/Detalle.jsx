import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardActions } from '@mui/material';
import { useParams } from 'react-router-dom';
import { arrayProductos } from '../../../ProductosMock';

export default function Detalle() {
    const { id } = useParams();
    console.log(`Hola, soy elproducto numero ${id}`);
    console.log(arrayProductos)
    const productoSeleccionado = arrayProductos.find( producto => producto.id === id)
    console.log(productoSeleccionado) 
 
  return (
   <div>
    <h1>Hola, soy el producto numero {id} </h1>
   
    
  
    
    
   </div>
  );
}