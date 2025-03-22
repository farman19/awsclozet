import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import {ToastContainer} from 'react-toastify';
import HomePage from './pages/homepage';
import { auth } from './components/firebaseconfig/firebase';
import Dashboard from './pages/dashboard/dashboard';
import ProductGallery from './pages/productgallery/productgallery';
import AddProduct from './pages/addproduct/addproduct';
import ProductList from './pages/productlist/productlist';

function App() {
  const [user, setUser ]= useState();
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setUser(user);
    })
  })
  return (
    <>
   <Router>
      <Routes>
      <Route path='/' element={user ? <HomePage/>: <LoginPage/>}/>
      <Route path='/dashbard' element={user ? <HomePage/> : <LoginPage/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/productgallery' element={<ProductGallery/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      </Routes>
        
    
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;