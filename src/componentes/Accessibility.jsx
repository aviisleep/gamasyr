import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaVolumeUp, FaVolumeMute, FaFont, FaMinus, FaPlus } from 'react-icons/fa';

const Accessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Aplicar configuraciones de accesibilidad
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }

    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }

    // Aplicar tamaño de fuente
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [highContrast, largeText, reducedMotion, fontSize]);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const toggleLargeText = () => {
    setLargeText(!largeText);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
    }
  };

  const resetAccessibility = () => {
    setHighContrast(false);
    setLargeText(false);
    setReducedMotion(false);
    setFontSize(16);
  };

  return (
    <>
      {/* Botón flotante de accesibilidad */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Abrir panel de accesibilidad"
        aria-expanded={isOpen}
      >
        <FaFont className="w-6 h-6" />
      </button>

      {/* Panel de accesibilidad */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Herramientas de Accesibilidad
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Cerrar panel de accesibilidad"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              {/* Contraste alto */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={highContrast}
                      onChange={toggleHighContrast}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Contraste Alto
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Mejora la visibilidad del texto
                  </p>
                </div>
                {highContrast ? <FaEye className="w-4 h-4 text-blue-600" /> : <FaEyeSlash className="w-4 h-4 text-gray-400" />}
              </div>

              {/* Texto grande */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={largeText}
                      onChange={toggleLargeText}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Texto Grande
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Aumenta el tamaño del texto
                  </p>
                </div>
                <FaFont className={`w-4 h-4 ${largeText ? 'text-blue-600' : 'text-gray-400'}`} />
              </div>

              {/* Reducir movimiento */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={reducedMotion}
                      onChange={toggleReducedMotion}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Reducir Movimiento
                    </span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Minimiza las animaciones
                  </p>
                </div>
                {reducedMotion ? <FaVolumeMute className="w-4 h-4 text-blue-600" /> : <FaVolumeUp className="w-4 h-4 text-gray-400" />}
              </div>

              {/* Control de tamaño de fuente */}
              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tamaño de Fuente: {fontSize}px
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decreaseFontSize}
                    className="p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Reducir tamaño de fuente"
                  >
                    <FaMinus className="w-3 h-3" />
                  </button>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${((fontSize - 12) / 12) * 100}%` }}
                    ></div>
                  </div>
                  <button
                    onClick={increaseFontSize}
                    className="p-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Aumentar tamaño de fuente"
                  >
                    <FaPlus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Botón de reinicio */}
              <div className="border-t pt-4">
                <button
                  onClick={resetAccessibility}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Restablecer Configuración
                </button>
              </div>

              {/* Información de accesibilidad */}
              <div className="border-t pt-4">
                <p className="text-xs text-gray-500">
                  Este sitio web cumple con las pautas de accesibilidad WCAG 2.1 AA.
                  Para más información sobre accesibilidad, contacta con nuestro equipo.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay para cerrar el panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Accessibility; 