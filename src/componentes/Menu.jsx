import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Logop from "../assets/logos/logodorado.png";
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
    <header className="fixed top-0 z-50 flex items-center justify-center w-full h-24 font-bold text-white bg-gray-800 max-w-screen-2xl">
      {/* Logo con enlace a Inicio */}
      <Link to="/" className="flex items-center h-full px-4">
        <img
          src={Logop}
          alt="Logo Gama SYR"
          className="hidden w-32 h-auto md:block"
        />
      </Link>

      {/* Logo para versión móvil y botón del menú */}
      <div className="flex items-center justify-center w-full md:hidden">
        <div className="w-48 py-2 px-7">
          <img src={Logop} alt="Logo Gama SYR" className="w-full h-auto" />
        </div>
        <button
          className="p-4 text-2xl text-white hover:text-red-500 md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      <nav className="items-center hidden bg-gray-800 md:flex">
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Inicio
          </Link>
          <div className="relative">
            <button
              onClick={toggleCatalogo}
              className="flex items-center text-white hover:text-gray-200"
            >
              Catalogo
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
              className="absolute mt-3 overflow-hidden bg-gray-800 shadow-xl"
            >
              <Link
                to="/gallegos"
                className="flex items-center py-4 transition duration-300 transform px-9 hover:scale-110"
              >
                <img
                  src={Logogallegos}
                  alt="Gallegos Logo"
                  className="w-10 mr-3"
                />
                <span className="text-white whitespace-nowrap">Gallegos</span>
              </Link>
              <Link
                to="/trielht"
                className="flex items-center py-4 transition duration-300 transform px-9 hover:scale-110"
              >
                <img
                  src={Logotrielht}
                  alt="Trielht Logo"
                  className="w-10 mr-3"
                />
                <span className="text-white whitespace-nowrap">Trielht</span>
              </Link>
            </motion.div>
          </div>
          <Link to="/postVenta" className="text-white hover:text-gray-300">
            PostVenta
          </Link>
          <Link to="/contacto" className="text-white hover:text-gray-300">
            Contacto
          </Link>
        </div>
      </nav>

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
              className="flex items-center px-4 py-3 text-black hover:bg-gray-100"
              onClick={closeMenu}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={toggleCatalogo}
                className="flex items-center w-full px-4 py-3 text-black hover:bg-gray-100"
              >
                Catalogo
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
                className="overflow-hidden text-black bg-white shadow-lg"
              >
                <Link
                  to="/gallegos"
                  className="flex items-center px-4 py-2 text-black hover:bg-gray-100"
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
                  className="flex items-center px-4 py-2 text-black hover:bg-gray-100"
                  onClick={closeMenu}
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
            <Link
              to="/postVenta"
              className="flex items-center px-4 py-3 text-black hover:bg-gray-100"
              onClick={closeMenu}
            >
              Post Venta
            </Link>
            <Link
              to="/contacto"
              className="flex items-center px-4 py-3 text-black hover:bg-gray-100"
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
