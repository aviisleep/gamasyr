import logoDorado from "../../assets/logos/logodorado.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useT } from '../../hooks/useT';

const Footer = () => {
  const t = useT();
  const sections = [
    {
      titulo: t('navega'),
      links: [
        { name: t('home'), url: "/" },
        { name: t('quienesSomos'), url: "/postventa" },
      ],
    },
    {
      titulo: t('servicios'),
      links: [
        { name: t('equipos'), url: "/gallegos" }
      ],
    },
    {
      titulo: t('informacion'),
      links: [
        { name: t('contacto'), url: "/contacto" },
        { name: t('avisoPrivacidad'), url: "/privacidad" },
        { name: t('terminosCondiciones'), url: "/terminos" },
      ],
    },
  ];

  const socialMedia = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100089640880033",
      icon: <FaFacebook size={24} />,
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/cyr_gama",
      icon: <FaInstagram size={24} />,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/camiones-remolques-gama/",
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <footer className="p-6 text-white bg-gray-800 dark:bg-gray-900 transition-colors duration-300">
      <div className="container grid grid-cols-2 gap-4 mx-auto md:grid-cols-5 max-w-7xl">
        {/* Logo y Dirección */}
        <div className="col-span-2 text-center md:text-left">
          <div className="flex items-center justify-center gap-4 mb-4 md:justify-start">
            <img src={logoDorado} alt="Logo Gama" className="w-40" />
          </div>
          <div className="mt-2 text-gray-400 dark:text-gray-300">
            <p className="font-semibold">{t('administrativa')}</p>
            <p>Autopista Medellin K.M. 3 T.T.C. Oficina C60, Cota</p>
            <p className="font-semibold mt-2">{t('servicio')}</p>
            <p>
              Autopista Medellin K.M. 2.2 500 metros por la entrada de parcelas
              cota, Cota
            </p>
          </div>
        </div>

        {/* Enlaces de Navegación */}
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col text-center md:text-left">
            <h3 className="mb-2 font-bold">{section.titulo}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-1">
                  <a href={link.url} className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-2 font-bold">{t('siguenos')}</h3>
          <div className="flex space-x-4">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
              >
                {media.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-white">
        {t('derechos')}
      </div>
    </footer>
  );
};

export default Footer;
