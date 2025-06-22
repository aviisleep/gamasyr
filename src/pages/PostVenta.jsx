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
import img1 from "../assets/imagenes/tecnicoGama1.webp";
import img2 from "../assets/imagenes/camionesGama2.webp";
import img3 from "../assets/imagenes/maxilodatruck.webp";
import { useT } from '../hooks/useT';

const PostVenta = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const t = useT();

  const openModal = (images) => {
    setModalImages(images);
    setIsModalOpen(true);
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
            {t('postVentaHeroTitulo')}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t('postVentaHeroDescripcion')}
          </motion.p>
        </div>
      </motion.section>

      {/* 🔧 MANTENIMIENTO TOTAL PARA TU FLOTA 🚛 */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Bloque 1 - Mantenimiento Total para tu Flota */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
              }}
            >
              <div className="flex flex-col items-center text-center w-full">
                <span className="text-lg md:text-xl mb-1 block">🔧 MANTENIMIENTO TOTAL</span>
                <span className="text-lg md:text-xl mb-4 block">PARA TU FLOTA 🚛</span>
              </div>
              <img
                src={img1}
                alt="Mantenimiento Total para tu Flota"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <div className="flex flex-col items-center text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4 mt-2">
                  En Camiones y Remolques GAMA, cuidamos cada detalle de tus vehículos con un servicio integral de mantenimiento:
                </p>
                <ul className="text-left text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  <li>✅ <b>Preventivo:</b> Anticipamos fallas, alargamos la vida útil de tu equipo.</li>
                  <li>✅ <b>Correctivo:</b> Reparamos con rapidez y calidad, minimizando tiempos muertos.</li>
                  <li>✅ <b>Predictivo:</b> Diagnósticos avanzados para detectar fallas antes de que ocurran.</li>
                </ul>
                <ul className="text-left text-gray-700 dark:text-gray-300 space-y-1">
                  <li>📍 Taller especializado en flotas de carga pesada</li>
                  <li>🛠️ Personal técnico certificado</li>
                  <li>📈 Enfocados en la eficiencia operativa de tu negocio</li>
                </ul>
              </div>
            </motion.div>

            {/* Bloque 2 - Contenedores */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } },
              }}
            >
              <div className="flex flex-col items-center text-center w-full">
                <span className="text-lg md:text-xl mb-1 block">🔧 TALLER MULTIMARCA ESPECIALIZADO</span>
                <span className="text-lg md:text-xl mb-4 block">EN SEMIRREMOLQUES 🚛</span>
              </div>
              <img
                src={img2}
                alt="Contenedores"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <div className="flex flex-col items-center text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4 mt-2">
                  En Camiones y Remolques GAMA, somos tu aliado en reparación, mantenimiento y alistamiento total para todo tipo de semirremolques, sin importar la marca.<br/><br/>
                  Ofrecemos soluciones integrales en:
                </p>
                <ul className="text-left text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  <li>🛠️ Reparaciones generales y estructurales</li>
                  <li>🎨 Pintura profesional y acabados industriales</li>
                  <li>⚙️ Sistemas hidráulicos y neumáticos</li>
                  <li>🔌 Diagnóstico y reparación eléctrica</li>
                  <li>🛞 Servicio completo de llantas y ejes</li>
                </ul>
                <ul className="text-left text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  <li>🔍 Atención precisa, rápida y con altos estándares de calidad.</li>
                  <li>💼 Servicio ideal para transportadores, flotas y empresas logísticas.</li>
                </ul>
                <ul className="text-left text-gray-700 dark:text-gray-300 space-y-1">
                  <li>📍 Ubicados estratégicamente para atender tu operación</li>
                </ul>
              </div>
            </motion.div>

            {/* Bloque 3 - Postventa */}
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } },
              }}
            >
              <div className="flex flex-col items-center text-center w-full">
                <span className="text-lg md:text-xl mb-4 block">🚛 SOLUCIONES INTELIGENTES PARA SEMIRREMOLQUES</span>
              </div>
              <img
                src={img3}
                alt="Soluciones inteligentes para semirremolques"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <div className="flex flex-col items-center text-center">
                <p className="text-gray-700 dark:text-gray-300 mb-4 mt-2">
                  En Camiones y Remolques GAMA somos importadores directos de repuestos y accesorios especializados para optimizar las operaciones de carga y transporte.<br/><br/>
                  Ofrecemos tecnologías que transforman tu operación:
                </p>
                <ul className="text-left text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  <li>🔹 Sistemas de cargue a doble nivel (Maxiloda)</li>
                  <li>🔹 Cámaras 360° para mayor visibilidad y seguridad</li>
                  <li>🔹 Control remoto y monitoreo de flotas en tiempo real</li>
                  <li>🔹 Accesorios para control de temperatura y carga sensible</li>
                </ul>
                <ul className="text-left text-gray-700 dark:text-gray-300 mb-4 space-y-1">
                  <li>✅ Mayor eficiencia y trazabilidad</li>
                  <li>✅ Menores tiempos de operación</li>
                  <li>✅ Reducción de costos logísticos</li>
                  <li>✅ Adaptabilidad a múltiples sectores</li>
                </ul>
                <ul className="text-left text-gray-700 dark:text-gray-300 space-y-1">
                  <li>🔧 Pensado para empresas que buscan más control, seguridad y rendimiento en cada kilómetro.</li>
                </ul>
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
      {/* <Empreqconfia /> */}

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