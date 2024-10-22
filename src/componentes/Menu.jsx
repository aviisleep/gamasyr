import { Link } from "react-router-dom";
import Logop from "../assets/logos/logogamalateral.svg";

const Menu = () => {
  return (
    <header>
      <div className="w-20 px-1 py-2">
        <img src={Logop} alt="Logo Gama SYR" />
      </div>
      <nav className="flex items-center justify-start p-4 max-w-6xl mx-auto">
        <div>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/contacts" className="text-white hover:text-gray-300">
            Contacts
          </Link>
          <Link to="/info" className="text-white hover:text-gray-300">
            Info
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
