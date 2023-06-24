import { Button } from '@mui/material'
import { Container } from '@mui/system'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import React from 'react'


const Soporte = () => {
  return (
   <>
    <Container sx={{ mt:5, textAlign:"center" }}>
    <img src="https://www.drtk.com.ar/images/DrayTek%20Argentina%20-%20Soporte.jpg" alt="" />
    </Container>
    
    <Container sx={{ mt:5, textAlign:"center" }}>
    <Button sx={{margin: 2, padding:2, backgroundColor:"snow"  }}> Preguntas frecuentes</Button>
    <Button sx={{margin: 2, padding:2, backgroundColor:"snow"}}> Demostración Web</Button>
    <Button sx={{margin: 2, padding:2, backgroundColor:"snow"}}> Garantía</Button>
    <Button sx={{margin: 2, padding:2, backgroundColor:"snow"}}> Solución de problemas </Button>
    </Container>
    
    <Container sx={{ margin: 5}}>
     <p>Al comunicarse con soporte técnico por favor indique el Modelo, el Número de serie y la Versión de Firmware del producto por el cual está realizando la consulta.</p>
     <p>DRTK ofrece cursos gratuitos de capacitación técnica de DrayTek. Si usted es un Integrador de Sistemas o un Reseller de Informática y desea participar de los mismos por favor comuníquese con nosotros.</p>
     <Button startIcon={<AccessAlarmsIcon/>} color="inherit" > Horario de atencion: 7:00 a 18:000</Button>
    </Container>
   
   
  
 
   
   </>
  )
}

export default Soporte
