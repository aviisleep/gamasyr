import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ConsentBanner = () => {
  // Estado para controlar la visibilidad del banner
  const [isVisible, setIsVisible] = useState(false);

  // Al montar el componente, verificamos si el usuario ya aceptó las cookies
  useEffect(() => {
    const acceptedConsent = localStorage.getItem("ConsentAccepted");
    if (!acceptedConsent) {
      setIsVisible(true);
    }
  }, []);

  // Función para manejar la aceptación de cookies
  const handleAccept = () => {
    localStorage.setItem("ConsentAccepted", true);
    setIsVisible(false);
  };

  // No renderiza nada si el banner ya no es visible
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center justify-between w-full p-4 text-white bg-gray-800 shadow-lg md:flex-row">
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto md:flex-row md:justify-between">
        <p className="mb-4 text-sm text-center md:mb-0 md:text-left md:mr-4">
          Tenga en cuenta: utilizamos cookies y otras tecnologías para mejorar su
          experiencia y personalizar el contenido. Al navegar por este sitio web,
          declaras que conoces y estás de acuerdo con nuestros{" "}
          <Link
            to="/terminos"
            className="text-blue-300 underline hover:text-blue-400"
          >
            Términos y Condiciones Generales de Uso
          </Link>{" "}
          y nuestra{" "}
          <Link
            to="/privacidad"
            className="text-blue-300 underline hover:text-blue-400"
          >
            Política de Privacidad
          </Link>
          .
        </p>
        <button
          onClick={handleAccept}
          className="px-6 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
