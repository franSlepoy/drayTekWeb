import React, { useState } from 'react'
import { SeccionesData } from '../../../servidor/Secciones'; 
import Productos from '../../common/productos/Productos';



const Home = () => {
    const { secciones, setSecciones} = useState([SeccionesData])
  return (
    <>
   {SeccionesData.map((seccion)=> {
    return (
     <Productos key={seccion.id} titulo={seccion.titulo} imagen={seccion.imagen}  />

    )
   })}

    </>
  
   );
};

export default Home
