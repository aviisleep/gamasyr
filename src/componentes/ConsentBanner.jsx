import { useState, useEffect } from "react";

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
    <div className="fixed bottom-0 flex flex-col items-center justify-between w-full p-4 text-white bg-gray-800 md:flex-row">
      <p className="mb-2 md:mb-0">
        Tenga en cuenta: utilizamos cookies y otras tecnologías para mejorar su
        experiencia y personalizar el contenido. Al navegar por este sitio web,
        declaras que conoces y estás de acuerdo con nuestros{" "}
        <a
          href="/terminos-y-condiciones"
          className="text-blue-300 underline hover:text-blue-400"
        >
          Términos y Condiciones Generales de Uso
        </a>{" "}
        y nuestra{" "}
        <a
          href="/politica-de-privacidad"
          className="text-blue-300 underline hover:text-blue-400"
        >
          Política de Privacidad
        </a>
        .
      </p>
      <button
        onClick={handleAccept}
        className="px-4 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700 md:mt-0"
      >
        Aceptar
      </button>
    </div>
  );
};

export default ConsentBanner;
