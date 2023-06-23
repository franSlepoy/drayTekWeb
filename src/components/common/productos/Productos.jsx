import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Productos() {
  return (
    <Card sx={{ maxWidth: 300, margin:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.draytek.co.uk/images/products/v166/vigor166-large.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vigor 2763 series
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          más info
        </Button>
      </CardActions>
    </Card>
    
  );
}
