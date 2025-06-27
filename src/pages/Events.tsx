import React from 'react';
import AbstractShape from '../layouts/AbstractShape';
import Card from '../layouts/Card';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';


const Events: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {/* Left Column */}
        <div className="flex flex-col flex-1 justify-center items-center gap-[10px]">
          <Card />
          <Card />
          <Card />
        </div>
        {/* Right Column */}
        <div className="flex flex-col justify-center items-center w-1/3">
          <AbstractShape />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;