import logogallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";
import logotrielht from "../assets/imagenes/logo trielht.png";

const EmpreqConfia = () => {
  const companies = [
    { name: "Gallegos", logo: logogallegos },
    { name: "Trielht", logo: logotrielht },
    // Agrega más empresas según sea necesario
  ];

  return (
    <section className="p-4 my-8 overflow-hidden bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-center text-white">
        Empresas que confían en nosotros
      </h2>
      <div className="relative w-full overflow-hidden">
        {/* Contenedor del carrusel animado */}
        <div className="flex animate-slide whitespace-nowrap">
          {companies.concat(companies).map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 transition-transform duration-300 transform hover:scale-110"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-20 transition-all duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpreqConfia;
