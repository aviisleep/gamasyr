// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Ajusta la ruta según tu estructura
import Contacto from "./pages/Contacto"; // Ajusta la ruta según tu estructura
import Info from "./pages/Info"; // Ajusta la ruta según tu estructura
import Gallegos from "./pages/Gallegos";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/info" element={<Info />} />
          <Route path="/gallegos" element={<Gallegos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
