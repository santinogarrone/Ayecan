import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Institucion from "./pages/Institucion";
import Propuesta from "./pages/Propuesta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucion" element={<Institucion />} />
        <Route path="/propuesta" element={<Propuesta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
