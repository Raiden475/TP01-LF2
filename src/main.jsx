import React from 'react';
import ReactDOM from 'react-dom'; // Corrección en la importación
import NavBar from './NavBar';
import Principal from './Principal';
import Footer from './Footer';
import Aside from './Aside';
import './assets/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Principal />
    <Footer />
    <Aside />
  </React.StrictMode>
);
