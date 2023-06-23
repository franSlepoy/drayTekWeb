import { Container } from '@mui/material'
import React from 'react'


const Nosotros = () => {
  return (
   <>
    <Container sx={{ mt:5, textAlign:"center" }}>
    <img src="https://www.drtk.com.ar/images/DrayTek%20Corp%20HQ%20B.jpg" alt="" />
    </Container>
    <Container sx={{ margin: 5}}>
    <p>
    DrayTek, establecido en 1997, se dedica a proporcionar soluciones de acceso a banda ancha y acceso remoto para pequeñas y medianas empresas, así como para usuarios domésticos. </p>
    <p> 
    Su línea de productos incluye equipos para aplicaciones críticas empresariales, como VPN, firewall, seguridad y failover. También ofrecen equipos de acceso DSL versátiles para entornos de oficina pequeña o domésticos, como módems ADSL USB, routers ADSL ADSL2 y ADSL 2+, routers con respaldo RDSI, routers inalámbricos, routers con múltiples interfaces WAN para equilibrio de carga y failover, entre otros.
    </p>
    <p>
    DrayTek se destaca por su enfoque en el desarrollo de productos innovadores, combinaciones efectivas y soluciones de reducción de costos flexibles. Han recibido reconocimiento y premios por su excelencia técnica, y trabajan en colaboración con socios globales para adaptar sus productos a las necesidades de los usuarios y del mercado local. En Argentina, los productos de DrayTek están disponibles a través de DRTK, que ofrece distribución, soporte técnico, capacitación gratuita y eventos para sus clientes.
    </p> 
    </Container>
    </>
  
  )
}

export default Nosotros
