import React, { useEffect } from 'react'
import "./styles.css";
import ContextAppProvider from './ContextAPI';
import Body from './Components/Body/Body';
import { BrowserRouter as Router } from 'react-router-dom'
import AOS from 'aos'

export default function App() {

  useEffect(()=>{
    AOS.init();
  },[])

   
  return (
    <Router>
         <ContextAppProvider>
           <> 
           <Body />
           </>
         </ContextAppProvider>
   </Router>
  );
}
