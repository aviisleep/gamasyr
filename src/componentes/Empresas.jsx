import { Link } from "react-router-dom";
import trielht from "../assets/imagenes/logo trielht.png";
import gallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";

const Empresas = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 my-8">
      {/* Logo 1 */}
      <Link
        to="/trielht"
        className="transition duration-300 transform hover:scale-125"
      >
        <img
          src={trielht}
          alt="Logo TrielHT"
          className="object-contain w-40 h-auto max-h-20"
        />
      </Link>

      {/* Logo 2 */}
      <Link
        to="/gallegos"
        className="transition duration-300 transform hover:scale-125"
      >
        <img
          src={gallegos}
          alt="Logo Gallegos"
          className="object-contain w-40 h-auto max-h-20"
        />
      </Link>
    </div>
  );
};

export default Empresas;
