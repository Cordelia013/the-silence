// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import History from "./pages/History";
import Ticketing from "./pages/Ticketing";
import Info from "./pages/Info";

// ... autres imports

function App() {
  return (
    <BrowserRouter>
      <div  className="">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/history" element={<History />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/info" element={<Info />} />
        </Routes>
     
      </div>
    </BrowserRouter>
  );
}
export default App;