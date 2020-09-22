import React from 'react';
import Navbar from './components/NavBar.js';
import Home from './components/Home.js';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Home greeting="Hola! Bienvenida a tu nueva forma de vestir ;)"></Home>
    </div>
  );
}

export default App;
