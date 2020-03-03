import React from 'react';
import AppBar from './components/AppBar.js';
import HeaderMenu from './components/HeaderMenu/HeaderMenu.js';
import Product from './components/Pages.jsx';
import FooterMenu from './components/FooterMenu.jsx';
function App() {
  return (
  <div>
    <AppBar />
    <HeaderMenu />
    <img src="/humss-tech-support-banner.jpg" alt='support_imag' width='100%'></img>
    <Product />
    <FooterMenu/>
  </div>)
};

export default App;