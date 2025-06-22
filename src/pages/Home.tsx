import { useState } from "react";
import HomeLoader from "../components/HomeLoader";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AbstractShape from "../layouts/AbstractShape";
import Navbar from "../layouts/Navbar";

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
    <div>
      <Header/>
<div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      height: '80vh',
    }}>
      
        <div >
          <AbstractShape />
        </div>
        <div >
          <Navbar />
      </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Home;