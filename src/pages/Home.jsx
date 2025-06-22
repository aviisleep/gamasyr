import Menu from "../componentes/Menu";
import Carousel from "../componentes/Carousel";
import Empresas from "../componentes/Empresas";
import BannerConsent from "../componentes/ConsentBanner";
import Contacto from "./Contacto";
import SocialBotones from "../componentes/SocialBotones";
import { SEO } from "../componentes/SEO";
import { getOrganizationStructuredData } from "../utils/structuredData";
import { useT } from '../hooks/useT';

const Home = () => {
  const t = useT();
  const structuredData = getOrganizationStructuredData();

  return (
    <>
      <SEO
        title={t('home')}
        description={t('descripcionHome')}
        keywords="camiones colombia, remolques colombia, repuestos camiones, mantenimiento camiones, gallegos trailers, cota cundinamarca, transporte colombia"
        url="/"
        structuredData={structuredData}
      />
      <div className="relative min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Menu />
        <SocialBotones />
        <Carousel className="mt-24" />
        {/* Contenedor para el título y el logo */}
        <div className="py-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{t('equipos')}</h2>
            <Empresas />
          </div>
        </div>

        <Contacto />
        <BannerConsent />
      </div>
    </>
  );
};

export default Home;
