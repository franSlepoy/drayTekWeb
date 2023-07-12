
import React, { useState } from 'react'
import { PuntosDeAccesoData } from '../../../servidor/PuntosDeAcceso'; 
import DetalleCard from '../../common/detallecard/DetalleCrad';

const PuntosDeAcceso = () => {
    const [ruters, setRuters] = useState([PuntosDeAcceso])
  return (
    <>
   {PuntosDeAccesoData.map((ruter)=> {
    return (
     <DetalleCard key={ruter.id} titulo={ruter.titulo} descripcion={ruter.descripcion} imagen={ruter.imagen} link={ruter.link}  />

    )
   })}

    </>
  )
}

export default PuntosDeAcceso