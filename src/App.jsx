import { Container } from '@mui/system'
import React from 'react'
import { Routes, Route} from "react-router-dom"
import Footer from './components/common/footer/Footer'
import NavBar from './components/common/navBar/NavBar'
import Home from './components/pages/home/Home'
import Nosotros from './components/pages/nosotros/Nosotros'
import Soporte from './components/pages/soporte/Soporte'


const App = () => {
  return (
    <>
     <NavBar/>
     <Container sx={{ mt:10 , display: 'flex', flexWrap:"wrap"}}>
     <Routes>
     <Route path='/home' element={ <Home/> } />
     <Route path='/nosotros' element={ <Nosotros/> } />
     <Route path='/soporte' element={ <Soporte/> } />
    </Routes>
     </Container> 
     <Footer/> 
     </>
   
  )
}

export default App

