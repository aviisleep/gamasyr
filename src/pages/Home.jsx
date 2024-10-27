// src/pages/Home.jsx
import Menu from "../componentes/Menu";
import Carousel from "../componentes/Carousel";
import Empresas from "../componentes/Empresas";
import Footer from "../componentes/footer/Footer";
import CookieConsent from "../componentes/CookieConsent";
import Contacto from "./Contacto";

const Home = () => {
  return (
    <div>
      <Menu className="py-4" />
      <Carousel className="py-4 mb-4" />
      <Empresas className="mb-4" />
      <Contacto />
      <Footer className="mb-4" />
      <CookieConsent />
    </div>
  );
};

export default Home;
