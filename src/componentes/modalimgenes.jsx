import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion"; // Para la animación

const ModalImages = ({ isOpen, onClose, images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!isOpen) return null;

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const isValidImage = (image) => {
    return image && image !== "" && image.includes(".");
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative w-full max-w-xl p-6 bg-white rounded-lg">
        {/* Botón de cierre con efecto */}
        <motion.button
          onClick={onClose}
          className="absolute p-2 text-xl text-gray-700 transition-all duration-300 ease-in-out rounded-full top-2 right-2 hover:bg-gray-200"
          whileHover={{ scale: 1.2, rotate: 90 }} // Efecto de rotación al pasar el ratón
          whileTap={{ scale: 0.9 }} // Efecto de reducción al hacer clic
        >
          <span className="text-xl font-semibold">X</span>
        </motion.button>

        {/* Imagen grande */}
        <div className="flex justify-center mb-4">
          {isValidImage(selectedImage) ? (
            <img
              src={selectedImage}
              alt="Imagen Grande"
              className="object-cover w-full h-auto max-w-lg rounded-lg"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-auto max-w-lg text-gray-500 bg-gray-200 rounded-lg">
              <span>Imagen no disponible</span>
            </div>
          )}
        </div>

        {/* Miniaturas debajo de la imagen grande */}
        <div className="flex justify-center mt-4 space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagen ${index + 1}`}
              className="object-cover w-20 h-20 rounded-lg cursor-pointer"
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ModalImages.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModalImages;
