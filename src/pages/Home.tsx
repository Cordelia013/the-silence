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
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        flex: 1,
        minHeight: 0,
        padding: '3rem 4rem',
        alignItems: 'center',
        maxHeight: '85vh',
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '100%',
          minHeight: '500px'
        }}>
          <AbstractShape />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateRows: '1fr auto',
          gap: '2rem',
          height: '100%',
          minHeight: '500px',
          position: 'relative'
        }}>
           <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Navbar />
          </div>
          <div style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '60%',
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