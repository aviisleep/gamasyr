import { useState } from "react";
import {
  FaTruck,
  FaTools,
  FaHammer,
  FaWarehouse,
  FaCogs,
} from "react-icons/fa";
import Menu from "../componentes/Menu";
import Footer from "../componentes/footer/Footer";
import Empreqconfia from "../componentes/Empreqconfia";
import mantenimiento1 from "../assets/imagenes/gallegos11.jpg";
import mantenimiento2 from "../assets/imagenes/gallegos22.png";
import mantenimiento3 from "../assets/imagenes/gallegos33.jpg";
import PropTypes from "prop-types";
import ServicioCard from "../componentes/ServicioCard";

// Componente Modal con validación de propiedades
const ModalImages = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  // Función para cerrar el modal cuando se hace clic fuera del contenido
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="w-full max-w-xl p-6 bg-white rounded-lg">
        <button
          onClick={onClose}
          className="absolute text-lg text-gray-700 top-2 right-2"
          aria-label="Cerrar modal"
        >
          X
        </button>
        <div className="flex justify-center space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen ${index + 1}`}
              className="object-cover w-32 h-32 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Validación de las propiedades
ModalImages.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const PostVenta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  // Función para abrir el modal con imágenes
  const openModal = (images) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  // Define the images you want to show in the modal when a service is clicked
  const mantenimientoImages = [mantenimiento1, mantenimiento2, mantenimiento3];
  const reparacionesGeneralesImages = [mantenimiento1, mantenimiento2];
  const tallerColisionImages = [mantenimiento3, mantenimiento1];
  const repuestosAccesoriosImages = [mantenimiento2, mantenimiento3];

  return (
    <div>
      <Menu />

      {/* Sección de Quiénes Somos */}
      <section className="p-8 mt-20 text-gray-800">
        <h2 className="mb-4 text-3xl font-bold text-center">Quiénes Somos</h2>
        <p className="max-w-2xl mx-auto mb-6 text-center">
          Gama SYR se dedica a la venta de trailers y contenedores,
          proporcionando soluciones de alta calidad para transporte y logística.
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
            <FaWarehouse className="mx-auto text-4xl text-yellow-500" />
            <h3 className="font-semibold">Venta de Contenedores</h3>
            <p className="text-sm">
              Contenedores duraderos para almacenamiento y transporte seguro.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Servicios con Íconos 3D y Hover */}
      <section className="p-8 text-gray-800 bg-gray-100">
        <h2 className="mb-4 text-3xl font-bold text-center">
          Nuestros Servicios
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Servicio de Mantenimiento */}
          <ServicioCard
            icon={<FaTools className="mx-auto text-5xl text-yellow-500" />}
            title="Mantenimiento"
            description="Realizamos mantenimientos preventivos y correctivos para asegurar
              el funcionamiento óptimo de tu equipo."
            onClick={() => openModal(mantenimientoImages)}
          />

          {/* Reparaciones Generales */}
          <ServicioCard
            icon={<FaHammer className="mx-auto text-5xl text-yellow-500" />}
            title="Reparaciones Generales"
            description="Ofrecemos soluciones de reparación para diferentes tipos de fallas
              estructurales y mecánicas."
            onClick={() => openModal(reparacionesGeneralesImages)}
          />

          {/* Taller de Colisión */}
          <ServicioCard
            icon={<FaWarehouse className="mx-auto text-5xl text-yellow-500" />}
            title="Taller de Colisión"
            description="Contamos con un taller especializado en colisiones para restaurar
              la estructura y seguridad de tus vehículos."
            onClick={() => openModal(tallerColisionImages)}
          />

          {/* Repuestos y Accesorios */}
          <ServicioCard
            icon={<FaCogs className="mx-auto text-5xl text-yellow-500" />}
            title="Repuestos y Accesorios"
            description="Venta de repuestos y accesorios originales para mejorar el
              rendimiento y prolongar la vida útil de tus unidades."
            onClick={() => openModal(repuestosAccesoriosImages)}
          />

          {/* Equipos */}
          <ServicioCard
            icon={<FaTruck className="mx-auto text-5xl text-yellow-500" />}
            title="Equipos"
            description="Disponemos de equipos especializados para cumplir con todas las
              necesidades de tu operación logística."
            onClick={() => openModal(mantenimientoImages)} // You can pass different images for each service
          />
        </div>
      </section>

      <Empreqconfia />
      <Footer />

      {/* Modal de Imágenes */}
      <ModalImages
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={modalImages}
      />
    </div>
  );
};

export default PostVenta;
