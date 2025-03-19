import PropTypes from "prop-types";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useState } from "react";

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

  // Lista de propiedades que deseas mostrar
  const propertiesToShow = [
    { label: "Descripción", value: product.description },
    { label: "Longitud", value: product.length },
    { label: "Esquineras", value: product.corners },
    { label: "Postes logísticos", value: product.logisticPosts },
    { label: "Aceros de alta resistencia", value: product.highStrengthSteel },
    { label: "Piso", value: product.floor },
    { label: "Normatividades", value: product.regulations },
    { label: "Capacidad", value: product.capacidad },
  ];

  return (
    <Modal open={true} onClose={onClose} center>
      <div className="flex flex-col items-center p-4 md:flex-row">
        {/* Contenedor de la imagen con botones de navegación */}
        <div className="relative w-full mb-4 md:w-1/2 md:mb-0">
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.title} - ${currentImageIndex + 1}`}
            className="object-cover w-full rounded-lg"
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

        {/* Información del producto a la derecha */}
        <div className="w-full md:w-1/2 md:pl-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            {product.title}
          </h2>
          <div className="space-y-2 text-gray-800">
            {propertiesToShow.map(
              (property) =>
                property.value && (
                  <div key={property.label}>
                    <h3 className="font-semibold text-red-500">
                      {property.label}:
                    </h3>
                    <p>{property.value}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

// Validación de PropTypes
ProductModal.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
    length: PropTypes.string,
    corners: PropTypes.string,
    logisticPosts: PropTypes.string,
    highStrengthSteel: PropTypes.string,
    floor: PropTypes.string,
    regulations: PropTypes.string,
    capacidad: PropTypes.string, // Nueva propiedad opcional
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
