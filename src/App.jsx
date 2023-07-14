import { Container } from '@mui/system'
import React from 'react'
import { Routes, Route} from "react-router-dom"
import Footer from './components/common/footer/Footer'
import NavBar from './components/common/navBar/NavBar'
import Accesorios from './components/pages/accesorio/Accesorios'
import Corporativos from './components/pages/corporativos/Corporativos'
import Home from './components/pages/home/Home'
import Nosotros from './components/pages/nosotros/Nosotros'
import PequeñasOficinas from './components/pages/pequeñasOficinas/PequeñasOficinas'
import PuntosDeAcceso from './components/pages/puntosDeAcceso/PuntosDeAcceso'
import Pymes from './components/pages/pymes/Pymes'
import Soporte from './components/pages/soporte/Soporte'
import Switches from './components/pages/switches/Switches'
import Example from './components/pages/carousel/Carousel'


const App = () => {
  return (
    <>
     <NavBar/>
     <Container sx={{ mt:10 , display: 'flex', flexWrap:"wrap"}}>
     <Routes>
    <Route path='/' element={ <Example/> } /> 
     <Route path='/productos' element={ <Home/> } />
     <Route path='/nosotros' element={ <Nosotros/> } />
     <Route path='/soporte' element={ <Soporte/> } />
     <Route path='/pequeñasOficinas' element={ <PequeñasOficinas/> } />
     <Route path='/puntosDeAcceso' element={ <PuntosDeAcceso/> } />
     <Route path='/pymes' element={ <Pymes/> } />
     <Route path='/switches' element={ <Switches/> } />
     <Route path='/corporativos' element={ <Corporativos/> } />
     <Route path='/accesorios' element={ <Accesorios/> } />
     </Routes>
     </Container> 
     <Footer/> 
     </>
   
  )
}

export default App

