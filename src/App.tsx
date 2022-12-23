import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/Layout';
import dark  from './style/theme/dark';
import { GlobalStyle } from "./style/GlobalStyle";
import { Dashboard}  from './pages/Destboard';
// import { Aside } from './components/Aside';/
import {  Route, Routes } from 'react-router-dom';
import { Mortgage } from './pages/Mortgage';
import { History } from './pages/History';
import { Sidbar } from './components/Sidbar';
import { Cards } from './pages/Cards';
import { ContentHeader } from './components/ContentHeader';
import { Header, Togle } from './components/Header';
import light from './style/theme/light';
import { NewTrasation } from './components/NewTrasation';

;

export  const App = () => {

  const [state, setState] = useState(true)

  const open = ()=>{
    setState(!state)
  }

  const [isNewTresictionOpenModal, setIsNewTresictionOpenModal] = useState(false)

  function hadleOpen(){
    setIsNewTresictionOpenModal(true)
  }
  function hadleClose(){
    setIsNewTresictionOpenModal(false)
  }
  return (
    <ThemeProvider theme={state ? dark : light}>
      
    
       <GlobalStyle/>

       
       <Layout >
        <button onClick={open}>theme</button>
        <ContentHeader/>
          {/* <Dashboard/> */}
         <Togle/>
        

       <Routes>
          <Route path="/" element={<Dashboard open={hadleOpen}/>} />
          <Route path="/dashboard" element={<Dashboard open={hadleOpen} />} />
          <Route path="/mortgage" element={<Mortgage />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/history" element={<History />} />
        </Routes>

        <NewTrasation
        
        isNewTresictionOpenModal={isNewTresictionOpenModal}
        hadleClose={hadleClose}
        />
       </Layout>
          
    </ThemeProvider>
  )
}