import React from 'react';
import Header from './components/Header';
import DestinyCalculator from './components/DestinyCalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <DestinyCalculator />
      <Footer />
    </div>
  );
}

export default App;