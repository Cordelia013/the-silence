// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from "./pages/Home";

// ... autres imports

function App() {
  return (
    <BrowserRouter>
      <div  className="">
        <Routes>
           <Route path="/" element={<Home />} /> 
          {/* ... autres routes */}
        </Routes>
     
      </div>
    </BrowserRouter>
  );
}
export default App;