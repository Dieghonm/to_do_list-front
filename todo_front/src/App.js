import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';

import Footer from './conponents/footter';
import Login from './conponents/login/login';

function App() {
  return (
    <BrowserRouter>
      <Login/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
