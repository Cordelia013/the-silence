import React from 'react';
import AbstractShape from '../layouts/AbstractShape';
import Card from '../components/Card';
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
            <Card 
              backgroundUrl={'/assets/bg-card.jpg'} 
              bannerText={'Nouvelle Exposition'} 
              bannerText2={''}
              title={'RÉVOLUTION CUBISTE'}
              subtitle1={'Vivez l’éveil artistique au Musée Matisse'}
              subtitle2={'avec Braque, Paul Klee et les maîtres du Cubisme'}
            />
          </div>
          <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center' }}>
            <Card 
              backgroundUrl={'/assets/bg-card2.jpg'} 
              bannerText={'Exposition Terminé'} 
              bannerText2={''}
         
              title={'ÉCLAT BAROQUE'}
              subtitle1={'Vivez l’intensité baroque au Musée Matisse'}
              subtitle2={'avec Rubens, Caravage et les maîtres du clair-obscur'}
            />
          </div>
          <div style={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center' }}>
            <Card 
              backgroundUrl={'/assets/bg-card3.jpg'} 
              bannerText={'Exposition Terminé'} 
              bannerText2={''}
              title={'PASSION ROMANTIQUE'}
              subtitle1={'Brisez les chaînes de la raison, embrasez l’émotion !'}
              subtitle2={'avec Delacroix, Géricault et les visionnaires du sublime'}
            />
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