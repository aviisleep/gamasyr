import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from '../hooks/useT';

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = useT();

  // Función para avanzar a la siguiente imagen
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder a la imagen anterior
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Cambio automático de imagen cada 3 segundos si hay más de una imagen
  useEffect(() => {
    if (product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [product.images.length]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay de fondo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />
        
        {/* Contenido del modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        >
          {/* Título 2 centrado y en toda la pantalla, arriba de todo */}
          <h2 className="w-full pt-8 mb-6 text-3xl font-bold text-center text-gray-900 dark:text-white">
            {product.subtitle}
          </h2>
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            aria-label="Cerrar modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col items-center p-6 md:flex-row">
            {/* Contenedor de la imagen */}
            <div className="relative w-full mb-6 md:w-1/2 md:mb-0 md:pr-6">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.title} - ${currentImageIndex + 1}`}
                className="object-cover w-full h-64 rounded-lg md:h-96"
                loading="lazy"
                decoding="async"
              />
              {/* Botones de navegación */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute px-3 py-1 text-white transform -translate-y-1/2 bg-gray-700 dark:bg-gray-600 rounded-full top-1/2 left-2 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
                    aria-label="Imagen anterior"
                  >
                    {"<"}
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute px-3 py-1 text-white transform -translate-y-1/2 bg-gray-700 dark:bg-gray-600 rounded-full top-1/2 right-2 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
                    aria-label="Imagen siguiente"
                  >
                    {">"}
                  </button>
                </>
              )}
            </div>

            {/* Información del producto */}
            <div className="w-full md:w-1/2">
              {/* Especificaciones del producto */}
              <div className="space-y-2 text-gray-900 dark:text-white">
                {product.specs && Object.entries(product.specs).map(([key, value]) => {
                  if (value) {
                    return (
                      <div key={key} className="mb-3">
                        <h3 className="font-semibold text-red-500 dark:text-red-400">
                          {key.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase())}:
                        </h3>
                        <p className="whitespace-pre-line text-gray-700 dark:text-gray-200">{t(value)}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Categorías */}
              {product.categories && product.categories.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold text-red-500 dark:text-red-400 mb-2">{t('categorias')}:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.categories.map((category, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Botón de Cotización */}
              <a
                href={`https://wa.me/+573015145137?text=Hola,%20me%20gustaría%20cotizar%20el%20producto:%20${encodeURIComponent(
                  product.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 mt-6 text-white bg-red-500 dark:bg-red-600 rounded-lg hover:bg-red-600 dark:hover:bg-red-700 transition-colors font-medium"
              >
                <FaWhatsapp className="mr-2" />
                {t('cotizar')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// Validación de PropTypes
ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    specs: PropTypes.object.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
