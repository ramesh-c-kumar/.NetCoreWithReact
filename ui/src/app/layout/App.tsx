import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import About from "../../features/about/About";
import Catalog from '../../features/catalog/Catalog';
import ProductDetail from "../../features/catalog/ProductDetail";
import Contact from "../../features/contact/Contact";
import Home from "../../features/home/Home";
import Header from './Header';

function App() {
  const[darkMode,setDarkMode]=useState(false);
  const paletteType= darkMode ? 'dark':'light';
  const theme= createTheme({
    palette:{
      mode:paletteType,
      background:{
        default:paletteType==='light'?'#eaeaea':'#121212'
      }
    }
  })

  function addDarkMode(){
    setDarkMode(prevState=>!prevState);
  }
  
  return (
    <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Header darkMode={darkMode} addDarkMode={addDarkMode}/>
          <Container>       
          <Route exact path='/' component={Home}/>
          <Route exact path='/catalog' component={Catalog}/>
          <Route exact path='/catalog/:id' component={ProductDetail}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>       
          </Container>
                          
    </ThemeProvider>   
  );
}

export default App;
