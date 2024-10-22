import { Link } from "react-router-dom";
import trielht from "../assets/imagenes/logo trielht.png";
import gallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";

const Empresas = () => {
  return (
    <div className="flex justify-center space-x-20 my-8">
      {/* Logo 1 */}
      <Link
        to="/trielht"
        className="transform transition duration-300 hover:scale-150"
      >
        <img
          src={trielht}
          alt="Logo TrielHT"
          className="w-40 h-20 object-contain"
        />
      </Link>

      {/* Logo 2 */}
      <Link
        to="/gallegos"
        className="transform transition duration-300 hover:scale-150"
      >
        <img
          src={gallegos}
          alt="Logo Gallegos"
          className="w-40 h-20 object-contain"
        />
      </Link>
    </div>
  );
};

export default Empresas;
