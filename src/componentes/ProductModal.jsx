import PropTypes from "prop-types";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <Modal open={true} onClose={onClose} center>
      <div className="flex flex-col items-center p-4 md:flex-row">
        {/* Contenedor de la imagen */}
        <div className="relative w-full mb-4 md:w-1/2 md:mb-0">
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.titulo2} - ${currentImageIndex + 1}`}
            className="object-cover w-full h-64 rounded-lg md:h-96"
            loading="lazy"
            decoding="async"
          />
          {/* Botones de navegación */}
          <button
            onClick={handlePrevious}
            className="absolute px-3 py-1 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 left-2"
          >
            {"<"}
          </button>
          <button
            onClick={handleNext}
            className="absolute px-3 py-1 text-white transform -translate-y-1/2 bg-gray-700 rounded-full top-1/2 right-2"
          >
            {">"}
          </button>
        </div>

        {/* Información del producto */}
        <div className="w-full md:w-1/2 md:pl-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            {product.titulo2}
          </h2>
          <div className="space-y-2 text-gray-800">
            {Object.entries(product).map(([key, value]) => {
              if (
                key !== "id" &&
                key !== "titulo2" &&
                key !== "images" &&
                value
              ) {
                return (
                  <div key={key}>
                    <h3 className="font-semibold text-red-500">{key}:</h3>
                    <p>{value}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Botón de Cotización */}
          <a
            href={`https://wa.me/+573015145137?text=Hola,%20me%20gustaría%20cotizar%20el%20producto:%20${encodeURIComponent(
              product.titulo2
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
          >
            <FaWhatsapp className="mr-2" /> {/* Ícono de WhatsApp */}
            Cotizar {/* Texto del botón */}
          </a>
        </div>
      </div>
    </Modal>
  );
};

// Validación de PropTypes
ProductModal.propTypes = {
  product: PropTypes.shape({
    titulo2: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    Descripción: PropTypes.string,
    Eficiencia: PropTypes.string,
    Opcionales: PropTypes.string,
    Accesos: PropTypes.string,
    Multitemperatura: PropTypes.string,
    Especializado: PropTypes.string,
    capacidad: PropTypes.string,
    Capacidades: PropTypes.string,
    ejes: PropTypes.string,
    Peso: PropTypes.string,
    Válvulas: PropTypes.string,
    Sistemas: PropTypes.string,
    Sistemalimpieza: PropTypes.string,
    material: PropTypes.string,
    Aplicación: PropTypes.string,
    Material: PropTypes.string,
    opcional: PropTypes.string,
    Descargue: PropTypes.string,
    Aislamiento: PropTypes.string,
    Diseño: PropTypes.string,
    suspension: PropTypes.string,
    incluye: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
