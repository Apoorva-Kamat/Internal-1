import React from 'react'
import"bootstrap/dist/css/bootstrap.min.css"
import Home from "./Components/Home"
import Course from "./Components/Course"
import About from"./Components/About"
import Navbar from"./Components/Navbar"
import {BrowserRouter,Routes,Route} from"react-router-dom"


function App()
{
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/about" element={<About/>}/>

    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App