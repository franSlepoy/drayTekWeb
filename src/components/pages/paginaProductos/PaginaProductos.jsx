import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { arrayProductos } from '../../../ProductosMock'

const PaginaProductos = () => {
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {
         arrayProductos.map( producto => (
         
        <Card  key={producto.id} sx={{ maxWidth: 300, margin:5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image= {producto.imagen}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producto.descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={ `/productos/${producto.id}`}> mas info </Link>
          </Button>
        </CardActions>
      </Card>
    

                

          
         )

         )
      }
    </div>
  )
}

export default PaginaProductos
