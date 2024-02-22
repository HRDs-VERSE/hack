import React from 'react';
import NavBar from "./components/NavBar"
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AvailableVaccine from './pages/AvailableVaccine';
import  Certificate  from './pages/Certificate';
import Upload from './pages/Upload';
import { Footer } from './components/Footer';


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-vaccine" element={<AvailableVaccine />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
