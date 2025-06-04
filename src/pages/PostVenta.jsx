import { useState, useEffect } from "react";
import {
  FaTruck,
  FaTools,
  FaHammer,
  FaWarehouse,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Menu from "../componentes/Menu"; // Asegúrate de que esta ruta sea correcta
import Empreqconfia from "../componentes/Empreqconfia"; // Componente ya existente
import img1 from "../assets/imagenes/img1.jpeg";
import img2 from "../assets/imagenes/img2.jpeg";
import img3 from "../assets/imagenes/img3.jpeg";

const PostVenta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const openModal = (images) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  // Example usage of openModal
  const handleOpenModal = () => {
    openModal(["https://example.com/image1.jpg", "https://example.com/image2.jpg"]);
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Menú superior */}
      <Menu />

      {/* Hero Section - Imagen de fondo + Título centrado */}
      <motion.section
        className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/fondogama.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Contenido centrado */}
        <div className="relative z-10 text-white text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            En Camiones y Remolques Gama
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            nos especializamos en la venta de equipos, repuestos y accesorios, además de ofrecer servicios de mantenimiento, garantizando siempre calidad, eficiencia y un compromiso total con las necesidades de nuestros clientes.
          </motion.p>
        </div>
      </motion.section>

      {/* Sección de Servicios Destacados */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Bloque 1 - Trailers */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
              }}
            >
              <img
                src={img1}
                alt="Trailers"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Trailers</h3>
                <p className="text-gray-600">
                  Ofrecemos soluciones de transporte con trailers resistentes y versátiles para todo tipo de carga.
                </p>
              </div>
            </motion.div>

            {/* Bloque 2 - Contenedores */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } },
              }}
            >
              <img
                src={img2}
                alt="Contenedores"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Contenedores</h3>
                <p className="text-gray-600">
                  Diseñados para almacenamiento seguro, duraderos y adaptables a cualquier condición climática.
                </p>
              </div>
            </motion.div>

            {/* Bloque 3 - Postventa */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } },
              }}
            >
              <img
                src={img3}
                alt="Postventa"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Postventa</h3>
                <p className="text-gray-600">
                  Soporte técnico integral, mantenimiento preventivo y correctivo, y venta de repuestos certificados.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección Quiénes Somos - Inspirado en h3sas.com */}
      <section className="relative w-full py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">     

    
        </div>
      </section>
    

      {/* Empresas que confían en nosotros */}
      <Empreqconfia />

      {/* Modal de Imágenes (ejemplo, ajustar según tu componente) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="max-w-4xl w-full p-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modalImages.map((img, index) => (
                <img key={index} src={img} alt={`Visión ${index + 1}`} className="w-full h-auto rounded" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostVenta;