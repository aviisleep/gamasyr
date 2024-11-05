import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importa motion de framer-motion
import Logop from "../assets/logos/logodorado.png";
import Logogallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";
import Logotrielht from "../assets/imagenes/logo trielht.png";

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para el menú principal
  const [isCatalogoOpen, setCatalogoOpen] = useState(false); // Estado para el catálogo

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Alternar menú completo
  };

  const toggleCatalogo = () => {
    setCatalogoOpen(!isCatalogoOpen); // Alternar menú del catálogo
  };
  const closeMenu = () => {
    setMenuOpen(false); // Cierra el menú principal
    setCatalogoOpen(false); // Cierra el menú de catálogo
  };

  return (
    <header className="fixed top-0 z-50 flex items-center justify-center w-full font-bold text-white bg-gray-800 max-w-screen-2xl">
      {/* Logo visible en pantallas grandes */}
      <div className="hidden w-40 px-2 py-1 md:flex">
        <img src={Logop} alt="Logo Gama SYR" className="w-20 mt-1" />
      </div>

      {/* Contenedor centrado solo en móviles */}
      <div className="flex items-center justify-between w-full bg-gray-800 md:hidden">
        <div className="w-48 py-2 px-7">
          <img src={Logop} alt="Logo Gama SYR" className="w-full h-auto" />
        </div>
        <button
          className="p-4 ml-10 text-2xl text-white hover:text-red" // Aumenta el tamaño del icono
          onClick={toggleMenu}
        >
          &#9776; {/* Icono de menú */}
        </button>
      </div>

      {/* Menú visible solo en pantallas más grandes */}
      <nav className="items-center hidden bg-gray-800 md:flex">
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleCatalogo}
              className="text-white hover:text-gray-200"
            >
              Catalogo
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isCatalogoOpen ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute mt-3 overflow-hidden text-black shadow-xl "
            >
              <Link
                to="/gallegos"
                className="flex items-center px-5 py-4 hover:bg-gray-800"
              >
                <img
                  src={Logogallegos}
                  alt="Gallegos Logo"
                  className="w-20 h-auto mr-2"
                />
                Gallegos
              </Link>
              <Link
                to="/trielht"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <img
                  src={Logotrielht}
                  alt="Trielht Logo"
                  className="w-20 h-auto mr-2"
                />
                Trielht
              </Link>
            </motion.div>
          </div>
          <Link to="/contacto" className="text-white hover:text-gray-300">
            Contacto
          </Link>
          <Link to="/info" className="text-white hover:text-gray-300">
            Info
          </Link>
        </div>
      </nav>

      {/* Menú desplegable completo para dispositivos móviles */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 z-10 w-full overflow-hidden text-black bg-white shadow-lg mt-60 md:hidden" // Asegúrate de que tenga suficiente margen superior
        >
          <Link
            to="/"
            className="flex items-center px-4 py-2 hover:bg-gray-100"
            onClick={closeMenu}
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleCatalogo}
              className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
            >
              Catalogo
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isCatalogoOpen ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden text-black bg-white shadow-lg"
            >
              <Link
                to="/gallegos"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
                onClick={closeMenu}
              >
                <img
                  src={Logogallegos}
                  alt="Gallegos Logo"
                  className="w-20 h-auto mr-2"
                />
                Gallegos
              </Link>
              <Link
                to="/trielht"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <img
                  src={Logotrielht}
                  alt="Trielht Logo"
                  className="w-20 h-auto mr-2"
                  onClick={closeMenu}
                />
                Trielht
              </Link>
            </motion.div>
          </div>
          <Link
            to="/contacto"
            className="flex items-center px-4 py-2 hover:bg-gray-100"
          >
            Contacto
          </Link>
          <Link
            to="/info"
            className="flex items-center px-4 py-2 hover:bg-gray-100"
          >
            Info
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Menu;
