import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialBotones = () => {
  return (
    <div className="social-buttons">
      {[
        { icon: <FaFacebookF />, link: "https://facebook.com" },
        { icon: <FaInstagram />, link: "https://instagram.com" },
        { icon: <FaTwitter />, link: "https://twitter.com" },
        { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
      ].map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialBotones;

// Estilos CSS en el mismo archivo
const styles = `
  .social-buttons {
    position: fixed;
    top: 25%;
    left: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 50;
  }

  .social-button {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.9);
    color: #1f2937; /* gray-800 */
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  }

  .social-button:hover {
    transform: scale(1.2);
    background-color: #1f2937; /* gray-800 */
    color: #ffffff;
  }
`;

// Inyectar los estilos globalmente
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
