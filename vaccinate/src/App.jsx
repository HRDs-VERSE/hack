import React, { useState } from 'react';
import Login from './components/Login';
import NavBar from "./components/NavBar"


function App() {

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
