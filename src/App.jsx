import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido Cliente"}/>
    </>
  );
}

export default App;
