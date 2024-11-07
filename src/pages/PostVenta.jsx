import { FaTruck, FaTools, FaBuilding } from "react-icons/fa"; // Ejemplos de íconos
import Menu from "../componentes/Menu";
import Footer from "../componentes/footer/Footer";
import Empreqconfia from "../componentes/Empreqconfia";

const PostVenta = () => (
  <div>
    <Menu />
    <section className="p-8 mt-20 text-gray-800 ">
      <h2 className="mb-4 text-3xl font-bold text-center">Quiénes Somos</h2>
      <p className="max-w-2xl mx-auto mb-6 text-center">
        Gama SYR se dedica a la venta de trailers y contenedores, proporcionando
        soluciones de alta calidad para transporte y logística.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-40 text-center">
          <FaTruck className="mx-auto text-4xl text-yellow-500" />
          <h3 className="font-semibold">Venta de Trailers</h3>
          <p className="text-sm">
            Ofrecemos trailers de alta calidad adaptados a tus necesidades.
          </p>
        </div>
        <div className="w-40 text-center">
          <FaTools className="mx-auto text-4xl text-yellow-500" />
          <h3 className="font-semibold">Servicio de Mantenimiento</h3>
          <p className="text-sm">
            Contamos con un equipo de expertos en mantenimiento y reparación.
          </p>
        </div>
        <div className="w-40 text-center">
          <FaBuilding className="mx-auto text-4xl text-yellow-500" />
          <h3 className="font-semibold">Venta de Contenedores</h3>
          <p className="text-sm">
            Contenedores duraderos para almacenamiento y transporte seguro.
          </p>
        </div>
      </div>
    </section>
    <Empreqconfia />
    <Footer />
  </div>
);

export default PostVenta;
