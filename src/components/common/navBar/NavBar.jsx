import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../logo/Logo';
import { NavLink } from 'react-router-dom'




const NavBar = () => {

  
 
  const [open, setOpen]= useState(false)

  return (
    <>
   <AppBar position='fixed'>
    <Toolbar>
      
    <IconButton color='inherit' onClick={()=> setOpen(true)}>
      <MenuIcon/>
    </IconButton>
    
    <Typography variant='h6' sx={{flexGrow:1}}>
      Contacto
    </Typography>
    
    <Button sx={{margin: 3, display: { xs: "none", sm:"block"}}} color='inherit' component={NavLink} to={"/productos"}> Productos </Button>
    <Button sx={{margin: 3, display: { xs: "none", sm:"block"}}} color='inherit' component={NavLink} to={"/nosotros"} > Nosotros</Button>
    <Button sx={{margin: 3, display: { xs: "none", sm:"block"}}} color='inherit' component={NavLink} to={"/soporte"} > Soporte</Button>
    
    
    <Logo/>
    


  </Toolbar>
  
  </AppBar>


   
   <Drawer 
    open={open}
    anchor="left" 
    onClose={()=> setOpen(false)}  
   >
   <NavListDrawer/>
   </Drawer>
  
    </>
  )
}

export default NavBar
