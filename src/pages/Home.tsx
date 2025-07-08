import { useState } from 'react';
import HomeLoader from '../components/HomeLoader';
import Header2 from '../layouts/Header2';
import Footer from '../layouts/Footer';
import AbstractShape from '../layouts/AbstractShape';
import Navbar from '../layouts/Navbar';
import Card from '../components/Card';

function Home() {
  const [showHome, setShowHome] = useState(false);

  if (!showHome) {
    return (
      <div>
        <HomeLoader onClick={() => setShowHome(true)} />
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header2 />
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
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Navbar fontSize="24px" gap="1.5rem" />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: window.innerWidth < 600 ? '20px' : '24px',
              right: '0%',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              height: '200px',
              margin: window.innerWidth < 600 ? '0 16px' : '0 75px',
            }}
          >
            <Card
              backgroundUrl={'/assets/bg-card.jpg'}
              bannerText={'Nouvelle Exposition'}
              bannerText2={''}
              title={'RÉVOLUTION CUBISTE'}
              subtitle1={'Vivez l’éveil artistique au Musée Matisse'}
              subtitle2={'avec Braque, Paul Klee et les maîtres du Cubisme'}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
