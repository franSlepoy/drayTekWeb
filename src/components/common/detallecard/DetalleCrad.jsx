import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


export default function DetalleCard(props) {
  return (
    <Box  mt={8} mb={8} >
      <Card sx={{ maxWidth: 600}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={props.imagen}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={props.link}>
        <Button size="small" color="primary">
          Más info
        </Button>
        </Link>
        
      </CardActions>
    </Card>

    </Box>
      );
}