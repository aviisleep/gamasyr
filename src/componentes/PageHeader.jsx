import logogallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";

const PageHeader = ({ title, description, logo = logogallegos, logoAlt = "Logo Gallegos Trailers" }) => {
  return (
    <section className="mb-12 text-center">
      <div className="flex items-center justify-center mb-6">
        <img
          src={logo}
          alt={logoAlt}
          className="h-16 md:h-20 object-contain"
          loading="eager"
        />
      </div>
      <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
        {title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </section>
  );
};

export default PageHeader; 