// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Ajusta la ruta según tu estructura
import Contacts from "./pages/Contacts"; // Ajusta la ruta según tu estructura
import Info from "./pages/Info"; // Ajusta la ruta según tu estructura

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
