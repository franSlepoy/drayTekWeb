import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { useParams } from 'react-router-dom';
import { arrayProductos } from '../../../ProductosMock';

export default function Detalle() {
    let { id } = useParams()

    let productoSeleccionado = arrayProductos.find( producto => producto.id === producto.id)
   

  return (
    <Box sx={{display:"flex", justifyContent:"center", ml: 46, mt: 5, mb:10}}>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={productoSeleccionado.imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productoSeleccionado.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productoSeleccionado.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
      </CardActions>
    </Card>
    </Box>
  );
}