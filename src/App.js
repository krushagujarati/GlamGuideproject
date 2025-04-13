// src/App.jsx
import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ProductsSection from './Components/ProductSection';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductsSection />
      <Footer />
    </>
  );
}

export default App;
