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
      <Menu />
      <Carousel />
      <Empresas />
      <Contacto />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Home;
