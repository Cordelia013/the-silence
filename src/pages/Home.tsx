import { useState } from "react";
import HomeLoader from "../components/HomeLoader";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AbstractShape from "../layouts/AbstractShape";
import Navbar from "../layouts/Navbar";
import Card from "../layouts/Card";

function Home() {
  const [showHome, setShowHome] = useState(false);

  if (!showHome) {
    return (
      <div onClick={() => setShowHome(true)}>
        <HomeLoader />
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header/>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // MODIFIABLE: Proportion des colonnes (ex: '2fr 1fr')
        gap: '3rem', // MODIFIABLE: Espacement entre les colonnes
        flex: 1,
        minHeight: 0,
        padding: '3rem 4rem', // MODIFIABLE: Espacement interne (vertical horizontal)
        alignItems: 'center',
        maxHeight: '85vh', // MODIFIABLE: Hauteur maximale du contenu
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '100%',
          minHeight: '500px' // MODIFIABLE: Hauteur minimale de la colonne gauche
        }}>
          <AbstractShape />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateRows: '1fr auto',
          gap: '2rem', // MODIFIABLE: Espacement entre Card et Navbar
          height: '100%',
          minHeight: '500px', // MODIFIABLE: Hauteur minimale de la colonne droite
          position: 'relative'
        }}>
           <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Navbar />
          </div>
          <div style={{ 
            position: 'absolute',
            top: '50%', // MODIFIABLE: Position verticale de la carte (50% = centré)
            left: '50%', // MODIFIABLE: Position horizontale de la carte (50% = centré)
            transform: 'translate(-50%, -50%)', // MODIFIABLE: Ajustement du centrage
            width: '90%', // MODIFIABLE: Largeur de la zone de la carte
            height: '60%', // MODIFIABLE: Hauteur de la zone de la carte
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <Card />
          </div>
         
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;