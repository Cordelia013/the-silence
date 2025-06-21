import { useState } from "react";
import HomeLoader from "../components/HomeLoader";

function Home() {

   const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="p-8 text-2xl">
      {showLoader ? (
        <HomeLoader onContinue={() => setShowLoader(false)} />
      ) : (
        <div>
          <h1>Home</h1>
        </div>
      )}
    </div>
  );
}
export default Home;
