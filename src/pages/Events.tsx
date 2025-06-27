import React from 'react';
import AbstractShape from '../layouts/AbstractShape';
import Card from '../layouts/Card';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';

const Events: React.FC = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ 
        display: 'flex', 
        flex: 1, 
        minHeight: 0, 
        padding: '3rem 4rem',
        gap: '3rem',
        maxHeight: '85vh'
      }}>
        {/* Left Column - Multiple Cards */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1, 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          gap: '2rem',
          minHeight: '500px'
        }}>
          <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center' }}>
            <Card />
          </div>
          <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center' }}>
            <Card />
          </div>
          <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center' }}>
            <Card />
          </div>
        </div>
        
        {/* Right Column - Abstract Shape */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '33.333%',
          minHeight: '500px'
        }}>
          <AbstractShape />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;