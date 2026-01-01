import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from "./components/Skills/Skills";
import ProjectData from './components/Projects/ProjectsData'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <ProjectData/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
