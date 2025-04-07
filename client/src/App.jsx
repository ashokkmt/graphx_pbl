import React from 'react'
import './styles/App.css'
import Home from './components/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Navebar from './components/Navebar.jsx';
import Footer from './components/Footer.jsx'
import ProjectPage from './components/ProjectPage.jsx';

function Homepage() {
  return (
    <>
      <Navebar />
      <Home />
      <Footer/>
    </>
  )
}

function Aboutpage() {
  return (
    <>
      <Navebar />

      <Footer/>
    </>
  )
}

function Activitypage() {
  return (
    <>
      <Navebar />
      
      <Footer/>
    </>
  )
}

function Projectpage() {
  return (
    <>
      <Navebar />
      <ProjectPage/>
      <Footer/>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/Projects" element={<Projectpage />} />
        <Route path="/Activity" element={<Activitypage />} />
      </Routes>
    </BrowserRouter>
  )
}
