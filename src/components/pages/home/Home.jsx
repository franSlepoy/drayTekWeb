import React from 'react'
import Productos from '../../common/productos/Productos'
import { arrayProductos } from '../../../ProductosMock';


const Home = () => {
    
  return (
    
    <>
   {
    arrayProductos.map((producto)=> <Productos key={producto.id} titulo={producto.titulo} imagen={producto.imagen} descripcion={producto.descripcion} id={producto.id} /> )
   }
  </>
   );
};

export default Home
