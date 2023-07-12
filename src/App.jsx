import { Container } from '@mui/system'
import React from 'react'
import { Routes, Route} from "react-router-dom"
import Footer from './components/common/footer/Footer'
import NavBar from './components/common/navBar/NavBar'
import Productos from './components/common/productos/Productos'
import Detalle from './components/pages/detalle/Detalle'
import Home from './components/pages/home/Home'
import Nosotros from './components/pages/nosotros/Nosotros'
import Soporte from './components/pages/soporte/Soporte'


const App = () => {
  return (
    <>
     <NavBar/>
     <Container sx={{ mt:10 , display: 'flex', flexWrap:"wrap"}}>
     <Routes>
     <Route path='/' element={ <Home/> } />
     <Route path='/productos/:id' element={ <Detalle/> } />
     <Route path='/nosotros' element={ <Nosotros/> } />
     <Route path='/soporte' element={ <Soporte/> } />
     <Route path='/productos' element={ <Productos/> } />
    </Routes>
     </Container> 
     <Footer/> 
     </>
   
  )
}

export default App

