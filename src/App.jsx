import { Container } from '@mui/system'
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/pages/home/Home'
import Nosotros from './components/pages/nosotros/Nosotros'
import Soporte from './components/pages/soporte/Soporte'


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
     
      
        <Route path='/home' element={ <Home/> } />
        <Route path='/nosotros' element={ <Nosotros/> } />
        <Route path='/soporte' element={ <Soporte/> } />
      
      
     </Routes>
    </BrowserRouter>
  )
}

export default App

