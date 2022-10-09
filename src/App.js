import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingsite from './pages/Landingsite';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingsite />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/datenschutz' element={<Datenschutz />} />
      </Routes>
    </div>
  );
}

export default App;
