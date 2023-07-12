
import React, { useState } from 'react'
import { SwitchesData } from '../../../servidor/Switches'; 
import DetalleCard from '../../common/detallecard/DetalleCrad';

const Switches = () => {
    const [ruters, setRuters] = useState([Switches])
  return (
    <>
   {SwitchesData.map((ruter)=> {
    return (
     <DetalleCard key={ruter.id} titulo={ruter.titulo} descripcion={ruter.descripcion} imagen={ruter.imagen} link={ruter.link}  />

    )
   })}

    </>
  )
}

export default Switches