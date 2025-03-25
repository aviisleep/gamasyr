import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Logop from "../assets/logos/logo dorado lateral.png";
import Logogallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";
import Logotrielht from "../assets/imagenes/logo trielht.png";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCatalogoOpen, setCatalogoOpen] = useState(false);

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
    <header className="fixed top-0 z-50 flex items-center justify-between w-full h-24 px-8 font-bold text-white bg-gray-800 max-w-screen-2xl">
      {/* Logo en el lado izquierdo */}
      <Link to="/" className="flex items-center">
        <img src={Logop} alt="Logo Gama SYR" className="w-40 mr-8 md:w-48" />
      </Link>

      {/* Botones del menú en el lado derecho (versión escritorio) */}
      <nav className="hidden space-x-6 text-sm md:flex">
        <Link
          to="/"
          className="px-4 py-2 transition-colors duration-300 rounded hover:bg-gray-700"
        >
          Inicio
        </Link>
        <div className="relative">
          <button
            onClick={toggleCatalogo}
            className="flex items-center px-4 py-2 transition-colors duration-300 rounded hover:bg-gray-700"
          >
            Catálogo
            <IoIosArrowDown
              className={`ml-1 transform transition-transform ${
                isCatalogoOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isCatalogoOpen ? "auto" : 0 }}
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
                className="w-12 mr-3" // Ajusté el tamaño del logo
              />
              <span className="whitespace-nowrap">Gallegos</span>{" "}
              {/* Asegura que el texto no se rompa */}
            </Link>
            <Link
              to="/trielht"
              className="flex items-center px-4 py-3 text-white transition-colors duration-300 hover:bg-gray-700"
            >
              <img
                src={Logotrielht}
                alt="Trielht Logo"
                className="w-12 mr-3" // Ajusté el tamaño del logo
              />
              <span className="whitespace-nowrap">Trielht</span>{" "}
              {/* Asegura que el texto no se rompa */}
            </Link>
          </motion.div>
        </div>
        <Link
          to="/postVenta"
          className="px-4 py-2 transition-colors duration-300 rounded hover:bg-gray-700"
        >
          PostVenta
        </Link>
        <Link
          to="/contacto"
          className="px-4 py-2 transition-colors duration-300 rounded hover:bg-gray-700"
        >
          Contacto
        </Link>
      </nav>

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
            className="fixed top-24 left-0 z-50 w-full max-h-[calc(100vh-6rem)] bg-white shadow-lg overflow-y-auto md:hidden"
          >
            <Link
              to="/"
              className="flex items-center px-6 py-4 text-lg text-black hover:bg-gray-100"
              onClick={closeMenu}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleCatalogo}
                className="flex items-center w-full px-6 py-4 text-lg text-black hover:bg-gray-100"
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
                className="overflow-hidden text-black bg-white shadow-lg"
              >
                <Link
                  to="/gallegos"
                  className="flex items-center w-full px-5 py-4 text-lg text-black hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  <img
                    src={Logogallegos}
                    alt="Gallegos Logo"
                    className="w-12 mr-4" // Ajusté el tamaño del logo
                  />
                  <span className="whitespace-nowrap">Gallegos</span>{" "}
                  {/* Asegura que el texto no se rompa */}
                </Link>
                <Link
                  to="/trielht"
                  className="flex items-center w-full px-6 py-4 text-lg text-black hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  <img
                    src={Logotrielht}
                    alt="Trielht Logo"
                    className="w-12 mr-4" // Ajusté el tamaño del logo
                  />
                  <span className="whitespace-nowrap">Trielht</span>{" "}
                  {/* Asegura que el texto no se rompa */}
                </Link>
              </motion.div>
            </div>
            <Link
              to="/postVenta"
              className="flex items-center px-6 py-4 text-lg text-black hover:bg-gray-100"
              onClick={closeMenu}
            >
              Post Venta
            </Link>
            <Link
              to="/contacto"
              className="flex items-center px-6 py-4 text-lg text-black hover:bg-gray-100"
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default Menu;
