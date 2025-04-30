import { useState } from "react";
import {
  FaTruck,
  FaTools,
  FaHammer,
  FaWarehouse,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Menu from "../componentes/Menu";
import Empreqconfia from "../componentes/Empreqconfia";
import mantenimiento1 from "../assets/imagenes/gallegos11.jpg";
import mantenimiento2 from "../assets/imagenes/gallegos22.png";
import mantenimiento3 from "../assets/imagenes/gallegos33.jpg";
import ServicioCard from "../componentes/ServicioCard";
import ModalImagesComponent from "../componentes/modalimgenes"; // Importando el componente ModalImagesComponent

const PostVenta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  // Estados para manejar el modal
  const openModal = (images) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  // Definir imagenes que se van a colocar en las diferentes imagenes
  const mantenimientoImages = [mantenimiento1, mantenimiento2, mantenimiento3];
  const reparacionesGeneralesImages = [mantenimiento1, mantenimiento2];
  const tallerColisionImages = [mantenimiento3, mantenimiento1];
  const repuestosAccesoriosImages = [mantenimiento2, mantenimiento3];

  // Variantes de animación para secciones
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div>
      <Menu />

      {/* Sección de Quiénes Somos */}
      <section className="p-8 mt-20 text-gray-800">
        <motion.h2
          className="mb-4 text-3xl font-bold text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          Quiénes Somos
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          Gama SYR se dedica a la venta de trailers y contenedores,
          proporcionando soluciones de alta calidad para transporte y logística.
        </motion.p>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant}
          className="flex flex-wrap justify-center gap-6"
        >
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
        </motion.div>
      </section>

      {/* Sección de Servicios con Íconos 3D y Hover */}
      <section className="p-8 text-gray-800 bg-gray-100">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="mb-4 text-3xl font-bold text-center"
        >
          Nuestros Servicios
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Servicio de Mantenimiento */}
          <ServicioCard
            icon={<FaTools className="mx-auto text-5xl text-yellow-500" />}
            titulo="Mantenimiento"
            description="Realizamos mantenimientos preventivos y correctivos para asegurar
              el funcionamiento óptimo de tu equipo."
            onClick={() => openModal(mantenimientoImages)} // Abre el modal con las imágenes
          />

          {/* Reparaciones Generales */}
          <ServicioCard
            icon={<FaHammer className="mx-auto text-5xl text-yellow-500" />}
            titulo="Reparaciones Generales"
            description="Ofrecemos soluciones de reparación para diferentes tipos de fallas
              estructurales y mecánicas."
            onClick={() => openModal(reparacionesGeneralesImages)}
          />

          {/* Taller de Colisión */}
          <ServicioCard
            icon={<FaWarehouse className="mx-auto text-5xl text-yellow-500" />}
            titulo="Taller de Colisión"
            description="Contamos con un taller especializado en colisiones para restaurar
              la estructura y seguridad de tus vehículos."
            onClick={() => openModal(tallerColisionImages)}
          />

          {/* Repuestos y Accesorios */}
          <ServicioCard
            icon={<FaCogs className="mx-auto text-5xl text-yellow-500" />}
            titulo="Repuestos y Accesorios"
            description="Venta de repuestos y accesorios originales para mejorar el
              rendimiento y prolongar la vida útil de tus unidades."
            onClick={() => openModal(repuestosAccesoriosImages)}
          />
        </div>
      </section>

      <Empreqconfia />

      {/* Modal de Imágenes */}
      <ModalImagesComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={modalImages}
      />
    </div>
  );
};

export default PostVenta;
