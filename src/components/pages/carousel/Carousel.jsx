import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { SeccionesData } from '../../../servidor/Secciones';
import Productos from '../../common/productos/Productos';
import { Box } from '@mui/material';
import Item from './Item';


 function Example()
    
{
    return (
        
          <Carousel sx={{width:1403, mt:5, mb:5}}  >
            {
                SeccionesData.map( seccion => <Item key={seccion.id} titulo={seccion.titulo} imagen={seccion.imagen} link={seccion.link} /> )
            }
        </Carousel>
        
        
    )
}
export default Example


