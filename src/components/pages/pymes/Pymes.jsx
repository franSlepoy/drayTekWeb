
import React, { useState } from 'react'
import { PymesData } from '../../../servidor/Pymes'; 
import DetalleCard from '../../common/detallecard/DetalleCrad';

const Pymes = () => {
    const [ruters, setRuters] = useState([Pymes])
  return (
    <>
   {PymesData.map((ruter)=> {
    return (
     <DetalleCard key={ruter.id} titulo={ruter.titulo} descripcion={ruter.descripcion} imagen={ruter.imagen} link={ruter.link}  />

    )
   })}

    </>
  )
}

export default Pymes