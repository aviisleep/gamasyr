import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Logop from "../assets/logos/logo dorado lateral.png";
import Logogallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";
import Logotrielht from "../assets/imagenes/logo trielht.png";
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useT } from '../hooks/useT';

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCatalogoOpen, setCatalogoOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const t = useT();

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleCatalogo = () => {
    setCatalogoOpen(!isCatalogoOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setCatalogoOpen(false);
  };

  // Ocultar logo en Post Venta
  const shouldShowLogo = location.pathname !== '/postVenta';

  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-gray-800 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md transition-colors duration-300"
      style={{
        height: isScrolled ? "70px" : "90px",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - oculto en Post Venta */}
          {shouldShowLogo && (
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/">
                <img
                  src={Logop}
                  alt="Logo Gama SYR"
                  className={`transition-all duration-300 object-contain mt-4 ${
                    isScrolled ? "h-12" : "h-16"
                  }`}
                />
              </Link>
            </motion.div>
          )}

          {/* Menú de navegación - versión escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              {t('home')}
            </Link>
            
            {/* Dropdown Equipos */}
            <div className="relative">
              <button
                onClick={toggleCatalogo}
                className="flex items-center text-white hover:text-red-400 transition-colors duration-300 font-medium"
              >
                {t('equipos')}
                <IoIosArrowDown
                  className={`ml-1 transform transition-transform ${
                    isCatalogoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {isCatalogoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-[200px] z-50"
                  >
                    <Link
                      to="/gallegos"
                      className="flex items-center px-4 py-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                      onClick={() => setCatalogoOpen(false)}
                    >
                      <img
                        src={Logogallegos}
                        alt="Gallegos Logo"
                        className="w-8 h-8 mr-3 object-contain"
                      />
                      <span>Gallegos</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/postVenta"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              {t('postVenta')}
            </Link>
            
            <Link
              to="/contacto"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              {t('contacto')}
            </Link>
          </nav>

          {/* Toggles de idioma y tema - versión escritorio */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          {/* Botón del menú hamburguesa - versión móvil */}
          <button
            className="md:hidden text-white text-2xl hover:text-red-400 transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 z-50 md:hidden shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">Menú</h2>
                  <button
                    onClick={closeMenu}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>
                
                <nav className="space-y-4">
                  <Link
                    to="/"
                    className="block py-3 text-gray-800 dark:text-white hover:text-red-400 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {t('home')}
                  </Link>
                  
                  <div>
                    <button
                      onClick={toggleCatalogo}
                      className="flex items-center justify-between w-full py-3 text-gray-800 dark:text-white hover:text-red-400 transition-colors duration-300"
                    >
                      {t('equipos')}
                      <IoIosArrowDown
                        className={`transform transition-transform ${
                          isCatalogoOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isCatalogoOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 space-y-2 overflow-hidden"
                        >
                          <Link
                            to="/gallegos"
                            className="flex items-center py-2 text-gray-600 dark:text-gray-300 hover:text-red-400 transition-colors duration-300"
                            onClick={closeMenu}
                          >
                            <img
                              src={Logogallegos}
                              alt="Gallegos Logo"
                              className="w-6 h-6 mr-3 object-contain"
                            />
                            Gallegos
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <Link
                    to="/postVenta"
                    className="block py-3 text-gray-800 dark:text-white hover:text-red-400 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {t('postVenta')}
                  </Link>
                  
                  <Link
                    to="/contacto"
                    className="block py-3 text-gray-800 dark:text-white hover:text-red-400 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {t('contacto')}
                  </Link>
                </nav>
                
                {/* Toggles en móvil */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Idioma:</span>
                    <LanguageToggle />
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-600 dark:text-gray-400">Tema:</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Menu;
