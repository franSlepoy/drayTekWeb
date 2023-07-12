import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
};

export default function Productos(props) {
   
    return (
    
        <Card key={props.id} sx={{ maxWidth: 300, margin:5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image= {props.imagen}
            alt=""
          />
          
<CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.titulo}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Link to={props.link} style={linkStyle} >
            <Button size="small" color="primary" variant="contained" sx={{textDecoration:"inherit"}} >
             más info
            </Button>
        </Link>

        </CardActions>
      </Card>
    );
}
