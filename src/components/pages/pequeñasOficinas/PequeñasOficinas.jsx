
import React, { useState } from 'react'
import { PequeñasOficinasData } from '../../../servidor/PequeñasOficinas'; 
import DetalleCard from '../../common/detallecard/DetalleCrad';

const PequeñasOficinas = () => {
    const [ruters, setRuters] = useState([PequeñasOficinas])
  return (
    <>
   {PequeñasOficinasData.map((ruter)=> {
    return (
     <DetalleCard key={ruter.id} titulo={ruter.titulo} descripcion={ruter.descripcion} imagen={ruter.imagen} link={ruter.link}  />

    )
   })}

    </>
  )
}

export default PequeñasOficinas
