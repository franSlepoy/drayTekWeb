import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Productos(props) {
   
    return (
    
        <Card sx={{ maxWidth: 300, margin:5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image= {props.imagen}
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
          <Button size="small" color="primary">
            <Link to={ `/productos/:${props.id}`}> mas info </Link>
          </Button>
        </CardActions>
      </Card>
    );
}
