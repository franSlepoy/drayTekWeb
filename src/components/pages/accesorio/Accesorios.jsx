import React, { useState } from 'react'
import { AccesoriosData } from '../../../servidor/Accesorios'; 
import DetalleCard from '../../common/detallecard/DetalleCrad';

const Accesorios = () => {
    const [ruters, setRuters] = useState([Accesorios])
  return (
    <>

   {AccesoriosData.map((ruter)=> {
    return (
     <DetalleCard key={ruter.id} titulo={ruter.titulo} descripcion={ruter.descripcion} imagen={ruter.imagen} link={ruter.link}  />
     

    )
   })}

   

    </>
  )
}

export default Accesorios