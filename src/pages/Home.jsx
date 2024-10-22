// src/pages/Home.jsx
import Menu from "../componentes/Menu";
import Carousel from "../componentes/Carousel";
import Empresas from "../componentes/Empresas";
import Footer from "../componentes/footer/Footer";

const Home = () => {
  return (
    <div>
      <Menu />
      <Carousel />
      <Empresas />
      <Footer />
    </div>
  );
};

export default Home;
