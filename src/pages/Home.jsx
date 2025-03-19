import Menu from "../componentes/Menu";
import Carousel from "../componentes/Carousel";
import Empresas from "../componentes/Empresas";
import Footer from "../componentes/footer/Footer";
import CookieConsent from "../componentes/CookieConsent";
import Contacto from "./Contacto";
import SocialBotones from "../componentes/SocialBotones";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Menu />
      <SocialBotones />
      <Carousel className="mt-24" />
      {/* Contenedor para el título y el logo */}
      <div className="py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Catálogo</h2>
          <Empresas />
        </div>
      </div>

      <Contacto />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Home;
