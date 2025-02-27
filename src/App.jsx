import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import TryTaskGo from './components/TryTaskGo';
import BuyCredit from './components/BuyCredit';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <TryTaskGo />
    </div>
  );
}

export default App;