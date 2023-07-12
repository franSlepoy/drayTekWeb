
import React, { useState } from 'react'
import { CorporativoData } from '../../../servidor/Corporativos'; 
import DetalleCard from '../../common/detallecard/DetalleCrad';
const linkStyle = {
  textDecoration: 'none',
};
const Corporativos = () => {
    const [ruters, setRuters] = useState([Corporativos])
  return (
    <>
   {CorporativoData.map((ruter)=> {
    return (
     <DetalleCard key={ruter.id} style={linkStyle} titulo={ruter.titulo} descripcion={ruter.descripcion} imagen={ruter.imagen} link={ruter.link}  />

    )
   })}

    </>
  )
}

export default Corporativos