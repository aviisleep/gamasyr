import logoGama from "../../assets/logos/logogama.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const sections = [
    {
      title: "Navega",
      links: [
        { name: "Home", url: "/" },
        { name: "Empresa", url: "/empresa" },
        { name: "Quienes somos", url: "/quienessomos" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { name: "Productos", url: "/productos" },
        { name: "Refacciones", url: "/servicios/#Refacciones" },
        { name: "Reparaciones", url: "/servicios/#Reparaciones" },
      ],
    },
    {
      title: "Información",
      links: [
        { name: "Contacto", url: "#contacto" },
        { name: "Aviso de Privacidad", url: "/privacidad" },
        { name: "Política de Cookies", url: "/cookies" },
      ],
    },
  ];

  const socialMedia = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com",
      icon: <FaFacebook size={24} />,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com",
      icon: <FaInstagram size={24} />,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com",
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <footer className="p-6 text-white bg-gray-800">
      <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-5 max-w-7xl">
        {/* Logo y Dirección */}
        <div className="col-span-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-4 mb-4 md:justify-start">
            <img src={logoGama} alt="Logo Gama" className="w-32" />
          </div>
          <p className="mt-2 text-gray-400">Planta: Bogotá, Colombia</p>
        </div>

        {/* Enlaces de Navegación */}
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col text-center md:text-left">
            <h3 className="mb-2 font-bold">{section.title}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-1">
                  <a href={link.url} className="text-gray-400 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-2 font-bold">Síguenos</h3>
          <div className="flex space-x-4">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                {media.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500">
        Copyright ©2024 All rights reserved | Carrocería & Remolques Gama
      </div>
    </footer>
  );
};

export default Footer;
