import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Info from "./pages/Info";
import Ticketing from "./pages/Ticketing";
import History from "./pages/History";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/history" element={<History />} />
        <Route path="/info" element={<Info />} /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
