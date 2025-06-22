import { useState } from "react";
import HomeLoader from "../components/HomeLoader";
import AbstractShape from "../layouts/AbstractShape";
import Navbar from "../layouts/Navbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="text-2xl min-h-screen h-screen overflow-hidden">
      {showLoader ? (
        <HomeLoader onContinue={() => setShowLoader(false)} />
      ) : (
        <div className="w-full h-full flex flex-col">
          <Header />
          <div className="flex-1 grid grid-cols-2 gap-8 h-full">
            {/* droite */}
            <div className="flex justify-center items-center">
              <AbstractShape />
            </div>
            {/* gauche */}
            <div className="flex justify-end items-center">
              <Navbar />
            </div>
            </div>
            <Footer />        </div>
      )}
    </div>
  );
}
export default Home;
