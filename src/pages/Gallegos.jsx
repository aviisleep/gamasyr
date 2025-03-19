import Menu from "../componentes/Menu";
import ProductModal from "../componentes/ProductModal";
import { useState } from "react";
import { productImages } from "../utils/productImagesGallegos"; // Importa las imágenes organizadas
import logogallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";
import { FaWhatsapp } from "react-icons/fa"; // Importa el ícono de WhatsApp

const Gallegos = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Estado para la categoría seleccionada

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Actualiza la categoría seleccionada
  };

  const products = [
    {
      id: 1,
      title: "Van Secos",
      category: "vanes", // Categoría para filtrar
      images: productImages.vanSeco || [],
      description: "Descripción del producto cajas secas",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
    {
      id: 2,
      title: "Van Refrigerados",
      category: "vanes", // Categoría para filtrar
      images: productImages.vanRefrigerado || [],
      description: "Descripción del producto Refrijeradas",
      length: "Desde 18 hasta 53 pies",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
    {
      id: 3,
      title: "Tanques de Asfalto",
      category: "tanques",
      images: productImages.tanqueasfalto || [],
      description:
        "Acero al carbón forrado, acabado espejo. Ideal para transportar asfalto.",
      capacidad: "30,000 y 40,000 lts.",
      ejes: "2 y 3 ejes",
    },
    {
      id: 4,
      title: "Tanques de Leche",
      category: "tanques",
      images: productImages.tanqueleche || [],
      description:
        "Ideal para el transporte de leche, fructuosa, aceites y más.",
      capacidad: "25,000, 30,000 y 40,000 lts.",
      material:
        "Acero inoxidable, acabado sanitario y Forro de acero inoxidable acabado tipo espejo.",
      opcional: "sistema de limpieza integrado.",
    },
    {
      id: 5,
      title: "Tanques Especiales",
      category: "tanques",
      images: productImages.tanqueespeciales || [],
      description:
        "Elaborado en acero al carbón, cumple con SCT 312 y DOT 412. Ideal para transporar ácidos y químicos en general.",
      capacidad: "21,000 Lts – 28,000 Lts",
      ejes: "2 y 3 ejes",
    },
    {
      id: 6,
      title: "Tanques Refinados",
      category: "tanques",
      images: productImages.tanquerefinados || [],
      description: "Fabricados en aluminio y cilíndricos.",
      capacidad: "47,500 y 55,000 lts.",
    },
    {
      id: 7,
      title: "Botelleros",
      category: "botelleros",
      images: productImages.botellero || [],
      description: "Tienen compartimentos específicos para evitar roturas.",
      capacidad: "Desde 1 hasta 4 toneladas.",
      ejes: "2 y 3 ejes.",
    },
    {
      id: 8,
      title: "Cama Baja",
      category: "camabajas",
      images: productImages.camabaja || [],
      description:
        "Acero al carbón, longitud acorde a su necesidad. Transporta maquinaria y equipo pesado.",
      capacidad: "Desde 30 tons - 100 tons",
      ejes: "2 / 3 / 4 Ejes.",
    },
    {
      id: 9,
      title: "Dollys",
      category: "dollys",
      images: productImages.dollys || [],
      description:
        "Eje direccional opcional, fabricado acero alta resistencia con remache. Argollas ITEC para gancho doble.",
      capacidad: "2.5 Tons",
      ejes: "2 ejes.",
    },
    {
      id: 10,
      title: "Furgones Composite",
      category: "furgones",
      images: productImages.furgones || [],
      description:
        "Fabricados en fibra de vidrio, poliuretano y acero inoxidable. Ideales para transporte de alimentos.",
      capacidad: "Desde 30 hasta 53 pies.",
      ejes: "2 ejes.",
    },
    {
      id: 11,
      title: "Plataformas",
      category: "plataformas",
      images: productImages.plataformas || [],
      description:
        "Piso disponible en madera pino o apitong, plasti tabla o antiderrapante cal. 14. Concha recta de 1.20 mts. de altura.",
      capacidad: "Disponible en 40, 45 y 53 ft. de largo.",
      ejes: "2 ejes.",
      suspension: "Neumática.",
    },
    {
      id: 12,
      title: "Sider",
      category: "siders",
      images: productImages.siders || [],
      description:
        "Caballete intermedio: triplay y alfombrada, piso antiderrapante cal. 14. Concha recta de 1.20 mts. de altura.",
      length: "37.5 a 40 ft.",
    },
    {
      id: 13,
      title: "Sider Tarp",
      category: "siders",
      images: productImages.siderstarp || [],
      description:
        "Ideal para el transporte de rollos, tarimas y carga en general.",
      length: "38 a 53 ft.",
    },
    {
      id: 14,
      title: "Silos",
      category: "silos",
      images: productImages.silos || [],
      description:
        "Silos de alta capacidad y resistencia, diseñados para el almacenamiento seguro y eficiente de productos a granel, garantizando protección y fiabilidad en todo momento.",
      capacidad: "Desde 30 hasta 53 pies.",
    },
    {
      id: 15,
      title: "Tolva de Acero",
      category: "tolvas",
      images: productImages.tolvasdeacero || [],
      description:
        "Fabricados en acero inoxidable o aluminio. Sistema de autocarga.",
      capacidad: " 50 y 60m3.",
      incluye: "filtro spin flow 4x4.",
    },
    {
      id: 16,
      title: "Tolva de Aluminio",
      category: "tolvas",
      images: productImages.tolvasdealuminio || [],
      description:
        "Fabricados en acero inoxidable o aluminio. Sistema de autocarga.",
      capacidad: " 50 y 60m3.",
      incluye: "filtro spin flow 4x4.",
    },
    {
      id: 17,
      title: "Volco Chasis",
      category: "volcos",
      images: productImages.volcochasis || [],
      description:
        "Transporte de agregados, materiales abrasivos y de alto impacto.",
      capacidad: "12M3 a 29M3",
      incluye: "puertas de gravedad y puertas neumáticas.",
    },
    {
      id: 18,
      title: "Volco Hibrido",
      category: "volcos",
      images: productImages.volcohibrido || [],
      description:
        "Transporte de agregados, materiales abrasivos y de alto impacto.",
      capacidad: "12M3 a 29M3",
      incluye: "puertas de gravedad y puertas neumáticas.",
    },
    {
      id: 19,
      title: "Volco Piraña",
      category: "volcos",
      images: productImages.volcopiraña || [],
      description:
        "Transporte de agregados, materiales abrasivos y de alto impacto.",
      capacidad: "12M3 a 29M3",
      incluye: "puertas de gravedad y puertas neumáticas.",
    },
  ];

  // Filtrar productos según la categoría seleccionada
  const filtrarProductos =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="py-40 gallegos-page">
      <Menu />
      {/* Contenedor para el título y el logo */}
      <div className="py-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <img
            src={logogallegos}
            alt="Logo"
            className="w-24 mx-auto mb-2 sm:w-40"
          />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Catálogo
          </h2>
          {/* Botones de categorías */}
          <div className="flex flex-col items-center mt-4 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            {/* Menú desplegable para móviles */}
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-4 py-2 text-white bg-gray-500 rounded sm:hidden"
            >
              {[
                "all",
                "vanes",
                "tanques",
                "botelleros",
                "camabajas",
                "dollys",
                "furgones",
                "plataformas",
                "siders",
                "silos",
                "tolvas",
                "volcos",
              ].map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            {/* Botones visibles solo en pantallas grandes */}
            <div className="hidden space-x-4 sm:flex">
              {[
                "all",
                "vanes",
                "tanques",
                "botelleros",
                "camabajas",
                "dollys",
                "furgones",
                "plataformas",
                "siders",
                "silos",
                "tolvas",
                "volcos",
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 text-white rounded ${
                    selectedCategory === category
                      ? "bg-blue-500"
                      : "bg-gray-500 hover:bg-blue-500"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Catálogo */}
      <div className="container px-4 py-8 mx-auto catalogo-content">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filtrarProductos.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <img
                decoding="async"
                src={product.images?.[0] || "ruta/a/imagen/por/defecto.jpg"}
                alt={product.title}
                loading="lazy"
                className="object-cover w-full h-64"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h2>
                <div className="flex justify-center space-x-4">
                  {/* Botón "Ver más" */}
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    aria-label={`Ver detalles de ${product.title}`}
                  >
                    Ver más
                  </button>

                  {/* Botón de WhatsApp */}
                  <a
                    href={`https://wa.me/+573015145137?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20${encodeURIComponent(
                      product.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    <FaWhatsapp className="mr-2" /> {/* Ícono de WhatsApp */}
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Gallegos;
