import PropTypes from "prop-types"; // Importar PropTypes

// Componente Modal con validación de propiedades
const modalimgenes = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-xl p-6 bg-white rounded-lg">
        <button
          onClick={onClose}
          className="absolute text-lg text-gray-700 top-2 right-2"
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
modalimgenes.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Validación para 'isOpen' (booleano requerido)
  onClose: PropTypes.func.isRequired, // Validación para 'onClose' (función requerida)
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // Validación para 'images' (array de strings, requerido)
};

export default modalimgenes;
