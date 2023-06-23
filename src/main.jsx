import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
 import { CssBaseline, createTheme, ThemeProvider } from "@mui/material"
import {  green, purple } from '@mui/material/colors';
 

 const theme = createTheme({
  palette: {
    primary: {
      main: "#e40e0e",
    },
    secondary: {
      main: "#f1e6e6",
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
