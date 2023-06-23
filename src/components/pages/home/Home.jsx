
import React from 'react'

import NavBar from '../../common/navBar/NavBar'
import { Container } from '@mui/system'
import Productos from '../../common/productos/Productos'
import Footer from '../../common/footer/Footer'



const Home = () => {
  return (
    <>
   <Container sx={{ mt: 14, display:"flex", flexWrap:"wrap"}}>
   <NavBar/>
   <Productos/>
   <Productos/>
   <Productos/>
   <Productos/>
   <Productos/>
   <Productos/>
   
   </Container>
   <Footer/>
    
 
    </>
   
  
 
   
 
 )
}

export default Home
