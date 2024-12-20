// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./componentes/ScrollToTop";
import Home from "./pages/Home"; // Ajusta la ruta según tu estructura
import Contacto from "./pages/Contacto"; // Ajusta la ruta según tu estructura
import Gallegos from "./pages/Gallegos";
import Trielht from "./pages/Trielht";
import PostVenta from "./pages/PostVenta";

const App = () => {
  return (
    <Router>
      <div>
        {/* Asegúrate de que ScrollToTop esté dentro de Router */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/gallegos" element={<Gallegos />} />
          <Route path="/trielht" element={<Trielht />} />
          <Route path="/postVenta" element={<PostVenta />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
