import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import ScrollToTop from "./componentes/ScrollToTop";
import Navbar from "./componentes/Menu"; // Opcional, si el navbar debe estar siempre visible
import Footer from "./componentes/footer/Footer"; // Opcional, si el footer también debe estar siempre visible
import ConsentBanner from "./componentes/ConsentBanner";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Gallegos from "./pages/Gallegos";
import Trielht from "./pages/Trielht";
import PostVenta from "./pages/PostVenta";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";

const Layout = () => {
  return (
    <div>
      {/* Navbar siempre visible */}
      <Navbar />
      <ScrollToTop />
      {/* Aquí se renderizan las páginas dinámicamente */}
      <main className="pt-24">
        <Outlet />
      </main>
      {/* Footer siempre visible, si es necesario */}
      <Footer />
      <ConsentBanner />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta con el layout principal */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Página principal */}
          <Route path="contacto" element={<Contacto />} />
          <Route path="gallegos" element={<Gallegos />} />
          <Route path="trielht" element={<Trielht />} />
          <Route path="postVenta" element={<PostVenta />} />
          <Route path="terminos" element={<Terminos />} />
          <Route path="privacidad" element={<Privacidad />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
