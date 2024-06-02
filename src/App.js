import React, { Component } from 'react';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';
import Default from './component/Default';
import Modal from './component/Modal';


function App () {
  
    return (
      <div>
        <div><Navbar/></div>
      <div>
        <Routes>
          
          <Route path="/" element={<ProductList/>} /> 
          <Route path="/details" element={<Details/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route  path="/default" element={<Default/>} />
        </Routes>
        <Modal/>
        </div> 
        </div>

    );
  
}
export default App;
