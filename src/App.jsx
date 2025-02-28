import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import TryTaskGo from './components/TryTaskGo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <TryTaskGo />
      <Features />
      <Pricing  />
      <Footer />
    </div>
  );
}

export default App;