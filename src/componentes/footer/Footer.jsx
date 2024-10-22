import logo from "../../assets/logos/logogama.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <footer className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex justify-start w-40 gap-2 mb-6 md:mb-0">
          <img src={logo} alt="Logo Gama" className="w-full" />
        </div>

        {/* Links de páginas */}
        <div className="flex flex-col gap-2 text-center md:text-left mb-6 md:mb-0">
          <a
            href="/"
            className="hover:text-gray-300 transform transition duration-300 hover:scale-150"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-gray-300 transform transition duration-300 hover:scale-150"
          >
            About Us
          </a>
          <a
            href="/services"
            className="hover:text-gray-300 transform transition duration-300 hover:scale-150"
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:text-gray-300 transform transition duration-300 hover:scale-150"
          >
            Contact
          </a>
        </div>

        {/* Redes Sociales */}
        <div className="flex space-x-4 justify-center md:justify-end">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </footer>

      {/* Dirección y Copyright */}
      <div className="mt-6 text-center text-white">
        Dirección: Bogotá, Colombia <br />
        Copyright ©2024 All rights reserved | Gama Carrocería & Remolques
      </div>
    </div>
  );
};

export default Footer;
