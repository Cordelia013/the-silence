<<<<<<< HEAD
import React from 'react';
import AbstractShape from '../layouts/AbstractShape';
import Card from '../components/Card';
import Footer from '../layouts/Footer';
import Header2 from '../layouts/Header2';
import SVGMorphingButton from '../components/SVGMorphingButton';
=======
import AbstractShape from '../layouts/AbstractShape';
import Card from '../layouts/Card';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Navbar from '../layouts/Navbar';
>>>>>>> modif_structure

const Events: React.FC = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
<<<<<<< HEAD
      <Header2 />
      <main style={{ 
        display: 'flex', 
        flex: 1, 
        minHeight: 0, 
        padding: '3rem 4rem',
        gap: '3rem',
        maxHeight: '85vh',
      }}>

        {/* left Column - Abstract Shape */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '60%',
          minHeight: '500px',
        }}>
          <AbstractShape />
        </div>
        
        {/* right Column - Multiple Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            minHeight: '550px',
            width: '40vw',
            maxWidth: '40vw',
            boxSizing: 'border-box',
            paddingTop: '2rem',
            transform: 'translateY(-10%)',
          }}
        >
          {/* Prix */}
          <div
            style={{
              height: '24px',
              fontFamily: 'Beatrice Deck, Arial, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: 0,
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box',
              marginBottom: '1.5rem',
              justifyContent: 'flex-start',
              width: '100%',
            }}
          >
            Musée Matisse individuel – 
            <span
              style={{
                marginLeft: '0.1em',
                fontFamily: 'Beatrice Deck, Arial, sans-serif',
                fontWeight: 700,
                fontSize: '36px',
                lineHeight: '100%',
                letterSpacing: 0,
              }}
            >
              12&nbsp;€
            </span>
          </div>
          
          {/* Card alignée à gauche */}
          <div style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'flex-start',
            marginBottom: '1.5rem'
          }}>
            <Card
              backgroundUrl={'/assets/bg-card.jpg'}
              bannerText={'Nouvelle Exposition'}
              bannerText2={''}
              title={'RÉVOLUTION CUBISTE'}
              subtitle1={"Vivez l'éveil artistique au Musée Matisse"}
              subtitle2={'avec Braque, Paul Klee et les maîtres du Cubisme'}
            />
          </div>
          
          {/* Bouton aligné à gauche */}
          <div style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'flex-start',
            marginBottom: '2rem',
          
          }}>
            <SVGMorphingButton />
          </div>
          
          {/* Section Gratuité alignée à gauche */}
          <div style={{ 
            fontSize: '32px',  
            fontFamily: 'Beatrice Deck, Arial, sans-serif',
            textAlign: 'left',
            width: '100%'
          }}>
            <h3 style={{ margin: '0 0 8px 0' }}>GRATUITÉ</h3>
            <p style={{ 
              fontSize: '16px', 
              margin: '0 0 1rem 0',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              (sur présentation d'un justificatif en cours de validité)
            </p>
            <p style={{ 
              fontSize: '16px',
              margin: '0',
              fontFamily: 'Beatrice Deck, Arial, sans-serif'
            }}>
              Moins de 18 ans – Étudiants - Demandeurs d'emploi
            </p>
          </div>
        </div>
      </main>
      <Footer />         
    </div>
  );
};

export default Events;
=======
      <Header />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          flex: 1,
          minHeight: 0,
          padding: '3rem 4rem',
          alignItems: 'center',
          maxHeight: '85vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            minHeight: '500px',
          }}
        >
          <AbstractShape />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateRows: '1fr auto',
            gap: '2rem',
            height: '100%',
            minHeight: '500px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              height: '60%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignSelf: 'end',
            }}
          >
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ticketing;
>>>>>>> modif_structure
