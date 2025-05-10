import { useState } from "react";
import Menu from "../componentes/Menu";
import ProductModal from "../componentes/ProductModal";
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
      Titulo: "Van Seco",
      Titulo2: "Semiremolque Van Seco Composite - Gallegos Trailers",
      categories: ["carga seca", "plataformas"], // Ahora es un arreglo de categorías
      images: productImages.vanSeco || [],
      Medidas: "43', 53' y 57' pies",
      Construcción: "Paneles composite de alta resistencia",
      Peso: "Estructura ultraligera para mayor capacidad de carga útil.",
      Capacidad: "Máximo volumen de carga con menor tara.",
      Aplicación: "Transporte de mercancía seca bajo estándares de eficiencia y durabilidad.",
    },
    {
      id: 2,
      Titulo: "Van Refrigerado",
      Titulo2: "Semirremolque Van Refrigerado — Gallegos Trailers",
      categories: ["carga refrigerada", "furgones"], // Múltiples categorías
      images: productImages.vanRefrigerado || [],
      Eficiencia:
        "Eficiencia térmica alto aislamiento para control óptimo de temperatura.",
      Opcionales: "Sistemas logísticos internos para gestión de carga.",
      Accesos: "Puertas laterales disponibles para carga y descarga rápida.",
      Multitemperatura: "Configuraciones para transporte simultáneo de distintos productos.",
      Especializado: "Diseño para transporte de carne en canal",
    },
    {
      id: 3,
      Titulo: "Tanque de Asfalto",
      Titulo2: "Semirremolque Tanque para Asfalto — Gallegos Trailers",
      categories: ["carga liquida"],
      images: productImages.tanqueasfalto || [],
      Material: "Fabricado en acero negro de alta resistencia.",
      Descargue: "Equipado con válvulas especializadas para el descargue eficiente de asfalto.",
      Aislamiento: "Aislamiento térmico opción de aislamiento térmico para mantener la temperatura del producto caliente.",
      Diseño: "Estructura optimizada para el transporte seguro y eficaz",
      Descripción: "Para un Semirremolque tanque grado alimenticio de Gallegos Trailers, diferentes capacidades, bajo peso y gran capacidad, ventajas vakvulas sanitarias, sistema de cara y autodescarga y sistemas de limpieza e 360 spray ball",
    },
    {
      id: 4,
      Titulo: "Grado Alimenticio",
      Titulo2: "Semirremolque Tanque Grado Alimenticio — Gallegos Trailers",
      categories: ["carga liquida", "equipos sobre chasis"],
      images: productImages.tanqueleche || [],
      Capacidades:
        "Disponibles en diferentes volúmenes según requerimiento operativo.",
      Peso: "Construcción en acero inox diseño ligero para maximizar la carga útil.",
      Válvulas: "Equipado con válvulas sanitarias de alta calidad para manejo seguro de productos alimenticios.",
      Sistemas: "Sistema de carga y autodescarga eficiente.",
      Sistema_limpieza: "Sistema de limpieza interna 360° con spray ball para higienización completa y rápida.",
      Aplicación: "Transporte seguro de líquidos alimenticios bajo estrictos estándares de inocuidad."
    },
    {
      id: 5,
      Titulo: "Tanques Especiales",
      categories: ["carga liquida"],
      images: productImages.tanqueespeciales || [],
      Description:
        "Elaborado en acero al carbón, cumple con SCT 312 y DOT 412. Ideal para transporar ácidos y químicos en general.",
      Capacidad: "21,000 Lts – 28,000 Lts",
      Ejes: "2 y 3 ejes",
    },
    {
      id: 6,
      Titulo: "Tanques Refinados",
      categories: ["carga liquida"],
      images: productImages.tanquerefinados || [],
      Description: "Fabricados en aluminio y cilíndricos.",
      Capacidad: "47,500 y 55,000 lts.",
    },
    {
      id: 7,
      Titulo: "Botelleros",
      Titulo2: "Carrocería para Transporte de Bebidas — Gallegos Trailers",
      categories: ["transporte de bebida"],
      images: productImages.botellero || [],
      Materiales: "Disponible en aluminio o versión híbrida (acero/aluminio).",
      Diseño: "Personalización total según requerimiento operativo y tipo de carga.",
      Capacidad: "Gran volumen de carga para optimizar la distribución de bebidas.",
      Ventajas: "Estructura ligera, alta resistencia y máxima eficiencia logística.",
    },
    {
      id: 8,
      Titulo: "Cama Baja",
      Titulo2: "Semirremolque Camabaja Cuello Fijo — Gallegos Trailers",
      categories: ["transportes especiales"],
      images: productImages.camabaja || [],
      Estructura: "reforzada en acero de alta resistencia. Capacidades de carga variables según configuración. ",
      Disponible: "Rampas traseras hidráulicas o manuales. Piso en acero, madera o combinaciones especiales. ",
      Ideal: "transporte de maquinaria pesada y cargas sobredimensionadas. Gran capacidad de soporte y estabilidad en operación.",
    },
    {
      id: 9,
      Titulo: "Dollys",
      Titulo2: "Dolly Tipo A - Gallegos Trailers",
      categories: ["transportes especiales"],
      images: productImages.dollys || [],
      Descripción:
        `El Dolly Tipo A de Gallegos Trailers está diseñado para facilitar el transporte de cargas 
        pesadas y largas, proporcionando estabilidad adicional a vehículos de remolque.\n
Con una estructura robusta y resistente, este dolly ofrece una capacidad de carga óptima para facilitar maniobras y distribuir el peso de manera eficiente. 
Su configuración de ejes en tándem o múltiple permite un rendimiento superior en condiciones exigentes, 
siendo ideal para aplicaciones de transporte industrial y maquinaria pesada.`,
      
    },
    {
      id: 10,
      Titulo: "Furgon Composite",
      Titulo2: "Furgón sobre Chasis Composite - Gallegos Trailers",
      categories: ["equipos sobre chasis"],
      images: productImages.furgones || [],
      Descripción:
        `El Furgón sobre Chasis Composite de Gallegos Trailers está diseñado para ofrecer gran capacidad de carga y resistencia, con un enfoque especial en la asepsia.\n\nSu estructura compuesta garantiza durabilidad y ligereza, mientras que su configuración de piso en aluminio, acero o madera asegura versatilidad según las necesidades del transporte.\n\nIdeal para el traslado de productos alimenticios, químicos y otros bienes sensibles, este furgón ofrece máxima seguridad y eficiencia, cumpliendo con estándares rigurosos de higiene y facilidad de limpieza.\n\nPerfecto para operaciones en sectores que requieren condiciones de alta calidad y control.`,
     },
    {
      id: 11,
      titulo: "Plataformas",
      categories: ["carga seca"],
      images: productImages.plataformas || [],
      description:
        "Piso disponible en madera pino o apitong, plasti tabla o antiderrapante cal. 14. Concha recta de 1.20 mts. de altura.",
      capacidad: "Disponible en 40, 45 y 53 ft. de largo.",
      ejes: "2 ejes.",
      suspension: "Neumática.",
    },
    {
      id: 12,
      titulo: "Sider",
      categories: ["carga seca", "transporte de bebida"],
      images: productImages.siders || [],
      description:
        "Caballete intermedio: triplay y alfombrada, piso antiderrapante cal. 14. Concha recta de 1.20 mts. de altura.",
      length: "37.5 a 40 ft.",
    },
    {
      id: 13,
      titulo: "Sider Tarp",
      categories: ["carga seca", "transporte de bebida"],
      images: productImages.siderstarp || [],
      description:
        "Ideal para el transporte de rollos, tarimas y carga en general.",
      length: "38 a 53 ft.",
    },
    {
      id: 14,
      titulo: "Silos",
      categories: ["transportes especiales"],
      images: productImages.silos || [],
      description:
        "Silos de alta capacidad y resistencia, diseñados para el almacenamiento seguro y eficiente de productos a granel, garantizando protección y fiabilidad en todo momento.",
      capacidad: "Desde 30 hasta 53 pies.",
    },
    {
      id: 15,
      titulo: "Tolva de Acero",
      categories: ["carga a granel"],
      images: productImages.tolvasdeacero || [],
      description:
        "Fabricados en acero inoxidable o aluminio. Sistema de autocarga.",
      capacidad: " 50 y 60m3.",
      incluye: "filtro spin flow 4x4.",
    },
    {
      id: 16,
      titulo: "Tolva de Aluminio",
      categories: ["carga a granel"],
      images: productImages.tolvasdealuminio || [],
      description:
        "Fabricados en acero inoxidable o aluminio. Sistema de autocarga.",
      capacidad: " 50 y 60m3.",
      incluye: "filtro spin flow 4x4.",
    },
    {
      id: 17,
      titulo: "Volco sobre Chasis",
      categories: ["mineria", "equipos sobre chasis", "carga a granel"],
      images: productImages.volcochasis || [],
      description:
        "Transporte de agregados, materiales abrasivos y de alto impacto.",
      capacidad: "12M3 a 29M3",
      incluye: "puertas de gravedad y puertas neumáticas.",
    },
    {
      id: 18,
      titulo: "Volco Hibrido",
      categories: ["mineria"],
      images: productImages.volcohibrido || [],
      description:
        "Transporte de agregados, materiales abrasivos y de alto impacto.",
      capacidad: "12M3 a 29M3",
      incluye: "puertas de gravedad y puertas neumáticas.",
    },
    {
      id: 19,
      titulo: "Volco Piraña",
      categories: ["mineria"],
      images: productImages.volcopiraña || [],
      description:
        "Transporte de agregados, materiales abrasivos y de alto impacto.",
      capacidad: "12M3 a 29M3",
      incluye: "puertas de gravedad y puertas neumáticas.",
    },
    {
      id: 20,
      titulo: "Chasis Porta Contenedor",
      categories: ["transportes especiales"],
      images: productImages.portaContenedor || [],
      description:
        "Transporte de agregados, materiales abrasivos y de alto impacto.",
      capacidad: "12M3 a 29M3",
      incluye: "puertas de gravedad y puertas neumáticas.",
    },
    {
      id: 21,
      titulo: "Tolvas Cementeras",
      categories: ["carga a granel", "equipos sobre chasis", ],
      images: productImages.tolvaCementera || [],
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
      : products.filter((product) =>
          product.categories.some((cat) => cat === selectedCategory)
        );

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
                "carga seca",
                "carga refrigerada",
                "carga liquida",
                "transporte de bebida",
                "transporte especiales",
                "equipos sobre chasis",
                "carga a granel",
                "mineria",
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
                "carga seca",
                "carga refrigerada",
                "carga liquida",
                "transporte de bebida",
                "transportes especiales",
                "equipos sobre chasis",
                "carga a granel",
                "mineria",
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
                alt={product.Titulo}
                loading="lazy"
                className="object-cover w-full h-64"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.Titulo}
                </h2>
                <div className="flex justify-center space-x-4">
                  {/* Botón "Ver más" */}
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    aria-label={`Ver detalles de ${product.titulo2}`}
                  >
                    Ver más
                  </button>
                  {/* Botón de WhatsApp */}
                  <a
                    href={`https://wa.me/+573015145137?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20${encodeURIComponent(
                      product.titulo2
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
