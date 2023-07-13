import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
};


export default function DetalleCard(props) {
  return (
    
    <Box margin={"auto"}>
      <Box  mt={8} mb={8} >
      <Card sx={{ maxWidth: 500}} >
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
        <Link to={props.link} style={{ textDecoration: 'none' }} target={"_blank"}>
        <Button variant="contained" size="small" color="primary">
          link
        </Button>
        </Link>
        
      </CardActions>
    </Card>

    </Box>
    </Box>
    
    
      );
}