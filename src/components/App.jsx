import React from 'react';
import '../styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './content/Navbar';
import ItemListContainer from './content/ItemListContainer';
import ItemCategoryListContainer from './content/ItemCategoryListContainer';
import ItemDetailContainer from './content/ItemDetailContainer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemCategoryListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
