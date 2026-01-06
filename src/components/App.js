import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const App = () => {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemList />}></Route>
          <Route path="/items/:id" element={<ItemDetail />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App
