import React, { useState } from 'react'

import { SeccionesData } from '../../../servidor/Secciones'
import DetalleCard from '../detallecard/DetalleCrad'

const Slider = () => {
    const { secciones, setSecciones} = useState([SeccionesData])
  return (
   <div>
     {SeccionesData.map(seccion => (
        <DetalleCard key={seccion.id} titulo={seccion.titulo} imagen={seccion.imagen} link={seccion.link}  /> 
     ))}
   </div>
       
    
  )
}

export default Slider
