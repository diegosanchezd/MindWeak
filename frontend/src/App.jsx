import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import { Route, BrowserRouter, Routes } from 'react-router-dom';


function App() {

  return (
    
    <>
     <div>
     <BrowserRouter>
         <Routes>       
           <Route path="/" element={<Login/>} /> 
           <Route path="/register" element={<Register/>} />       
           <Route path="/main" element={<Main/>} />    
         </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
