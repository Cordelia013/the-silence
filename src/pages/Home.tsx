// src/pages/Home.tsx
import { useState } from "react";
import HomeLoader from "../components/HomeLoader";
import AbstractShape from "../layouts/AbstractShape";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Navbar from "../layouts/Navbar";
// ... imports

function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {showLoader ? (
        <HomeLoader onContinue={() => setShowLoader(false)} />
      ) : (
        <div className="w-full min-h-screen flex flex-col">
          <Header />
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
            {/* Colonne droite - SVG */}
            <div className="flex justify-center items-center min-h-[400px] lg:min-h-full">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <AbstractShape />
              </div>
            </div>
            {/* Colonne gauche - Navigation */}
            <div className="flex justify-center lg:justify-end items-center">
              <Navbar />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
export default Home;