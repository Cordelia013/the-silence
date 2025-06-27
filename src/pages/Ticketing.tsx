import React from 'react';
import AbstractShape from '../layouts/AbstractShape';
import Card from '../components/Card';
import Footer from '../layouts/Footer';
import Header2 from '../layouts/Header2';
import SVGMorphingButton from '../components/SVGMorphingButton';

const Events: React.FC = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header2 />
      <main style={{ 
        display: 'flex', 
        flex: 1, 
        minHeight: 0, 
        padding: '3rem 4rem',
        gap: '3rem',
        maxHeight: '85vh'
      }}>

             {/* left Column - Abstract Shape */}
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
        {/* right Column - Multiple Cards */}
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
          <SVGMorphingButton />
        </div>
        
   
      </main>
      <Footer />         
    </div>
  );
};

export default Events;