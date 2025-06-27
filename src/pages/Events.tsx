import React from 'react';
import AbstractShape from '../layouts/AbstractShape';
import Card from '../layouts/Card';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Events: React.FC = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* Left Column */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1, 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '10px' 
        }}>
          <Card />
          <Card />
          <Card />
        </div>
        {/* Right Column */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '33.333%' 
        }}>
          <AbstractShape />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;