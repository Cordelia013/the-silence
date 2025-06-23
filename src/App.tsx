// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

// ... autres imports

function App() {
  return (
    <BrowserRouter>
      <div  className="">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/gallery" element={<Gallery />} />


        </Routes>
     
      </div>
    </BrowserRouter>
  );
}
export default App;