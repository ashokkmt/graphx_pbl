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

function TestPage() {
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
        <Route path="/Projects" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}
