import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Logop from "../assets/logos/logo dorado lateral.png";
import Logogallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";
import Logotrielht from "../assets/imagenes/logo trielht.png";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCatalogoOpen, setCatalogoOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detectar si el footer es visible
      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        setIsFooterVisible(footerRect.top <= window.innerHeight);
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

  return (
    <motion.header
      className={`fixed top-0 z-50 flex items-center justify-between w-full px-8 font-bold text-white transition-all duration-500 overflow-hidden`}
      style={{
        height: isScrolled ? "80px" : "96px",
        background: "rgba(30, 41, 59, 0.9)", // Color gris azulado con transparencia
        backdropFilter: "blur(10px)", // Efecto de desenfoque para el fondo
        WebkitBackdropFilter: "blur(10px)", // Compatibilidad con Safari
        borderRadius: isScrolled ? "50px" : "0", // Efecto ovalado
      }}
      initial={{ scale: 1 }}
      animate={{
        scale: isScrolled ? 0.98 : 1, // Contraer ligeramente el fondo
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Contenedor principal centrado */}
      <motion.div
        className="flex items-center justify-center w-full"
        initial={{ x: 0 }}
        animate={{
          x: isScrolled ? 0 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center"
          initial={{ x: 0 }}
          animate={{
            x: isScrolled ? 0 : "-50%",
            scale: isScrolled ? 0.8 : 1,
            opacity: isFooterVisible ? 0 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {!isFooterVisible && (
            <Link to="/">
              <img
                src={Logop}
                alt="Logo Gama SYR"
                className={`transition-all duration-500 ${
                  isScrolled ? "w-32 md:w-36" : "w-40 md:w-48"
                }`}
                style={{
                  filter: "none", // Eliminar cualquier filtro indeseado
                }}
              />
            </Link>
          )}
        </motion.div>

        {/* Botones del menú en el lado derecho (versión escritorio) */}
        <motion.nav
          className={`hidden md:flex space-x-6 text-sm items-center transition-all duration-500`}
          initial={{ x: 0 }}
          animate={{
            x: isScrolled ? 0 : "50%",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="px-4 py-2 transition-colors duration-300 rounded hover:bg-gray-700"
              style={{
                textShadow: "none", // Eliminar sombra del texto
              }}
            >
              Inicio
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleCatalogo}
              className="flex items-center px-4 py-2 transition-colors duration-300 rounded hover:bg-gray-700"
              style={{
                textShadow: "none", // Eliminar sombra del texto
              }}
            >
              Catálogo
              <IoIosArrowDown
                className={`ml-1 transform transition-transform ${
                  isCatalogoOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isCatalogoOpen ? "auto" : 0,
                opacity: isCatalogoOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute right-0 mt-2 overflow-y-hidden bg-gray-800 rounded-md shadow-xl"
            >
              <Link
                to="/gallegos"
                className="flex items-center px-4 py-3 text-white transition-colors duration-300 hover:bg-gray-700"
              >
                <img
                  src={Logogallegos}
                  alt="Gallegos Logo"
                  className="w-12 mr-3"
                />
                <span className="whitespace-nowrap">Gallegos</span>
              </Link>
              <Link
                to="/trielht"
                className="flex items-center px-4 py-3 text-white transition-colors duration-300 hover:bg-gray-700"
              >
                <img
                  src={Logotrielht}
                  alt="Trielht Logo"
                  className="w-12 mr-3"
                />
                <span className="whitespace-nowrap">Trielht</span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/postVenta"
              className="px-4 py-2 transition-colors duration-300 rounded hover:bg-gray-700"
              style={{
                textShadow: "none", // Eliminar sombra del texto
              }}
            >
              PostVenta
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/contacto"
              className="px-4 py-2 transition-colors duration-300 rounded hover:bg-gray-700"
              style={{
                textShadow: "none", // Eliminar sombra del texto
              }}
            >
              Contacto
            </Link>
          </motion.div>
        </motion.nav>
      </motion.div>

      {/* Botón del menú hamburguesa (versión móvil) */}
      <button
        className="p-4 text-3xl text-white hover:text-red-500 md:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeMenu}
          ></div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-0 z-50 w-full max-h-[calc(100vh-6rem)] bg-gray-800 shadow-lg overflow-y-auto md:hidden"
          >
            <Link
              to="/"
              className="flex items-center px-6 py-4 text-lg text-white hover:bg-gray-700"
              onClick={closeMenu}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleCatalogo}
                className="flex items-center w-full px-6 py-4 text-lg text-white hover:bg-gray-700"
              >
                Catálogo
                <IoIosArrowDown
                  className={`ml-2 text-xl transform transition-transform ${
                    isCatalogoOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: isCatalogoOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-white bg-gray-800 shadow-lg"
              >
                <Link
                  to="/gallegos"
                  className="flex items-center w-full px-5 py-4 text-lg text-white hover:bg-gray-700"
                  onClick={closeMenu}
                >
                  <img
                    src={Logogallegos}
                    alt="Gallegos Logo"
                    className="w-12 mr-4"
                  />
                  <span className="whitespace-nowrap">Gallegos</span>
                </Link>
                <Link
                  to="/trielht"
                  className="flex items-center w-full px-6 py-4 text-lg text-white hover:bg-gray-700"
                  onClick={closeMenu}
                >
                  <img
                    src={Logotrielht}
                    alt="Trielht Logo"
                    className="w-12 mr-4"
                  />
                  <span className="whitespace-nowrap">Trielht</span>
                </Link>
              </motion.div>
            </div>
            <Link
              to="/postVenta"
              className="flex items-center px-6 py-4 text-lg text-white hover:bg-gray-700"
              onClick={closeMenu}
            >
              Post Venta
            </Link>
            <Link
              to="/contacto"
              className="flex items-center px-6 py-4 text-lg text-white hover:bg-gray-700"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </motion.div>
        </>
      )}
    </motion.header>
  );
};

export default Menu;
