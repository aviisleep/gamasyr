import PropTypes from "prop-types"; // Importa PropTypes para la validación de propiedades

// Componente reutilizable para las tarjetas de servicio con validación de propiedades
const ServicioCard = ({ icon, titulo, description, onClick }) => (
  <div
    className="max-w-xs p-6 text-center transition-transform duration-300 transform bg-white shadow-md cursor-pointer rounded-xl hover:scale-105"
    onClick={onClick}
  >
    {icon}
    <h3 className="mt-4 text-xl font-semibold">{titulo}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

// Validación de las propiedades
ServicioCard.propTypes = {
  icon: PropTypes.element.isRequired, // La propiedad 'icon' debe ser un componente React (elemento)
  titulo: PropTypes.string.isRequired, // La propiedad 'titulo' debe ser una cadena de texto
  description: PropTypes.string.isRequired, // La propiedad 'description' debe ser una cadena de texto
  onClick: PropTypes.func.isRequired, // La propiedad 'onClick' debe ser una función
};

export default ServicioCard;
