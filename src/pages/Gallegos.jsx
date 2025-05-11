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
      Sistema_limpieza: "Sistema de limpieza interna 360° spray ball para higienización completa y rápida.",
      Aplicación: "Transporte seguro de líquidos alimenticios bajo estrictos estándares de inocuidad."
    },
    {
      id: 5,
      Titulo: "Tanques Especiales",
      Titulo2: "Tanque Especial — Gallegos Trailers",
      categories: ["carga liquida"],
      images: productImages.tanqueespeciales || [],
      Descripción:
        "Elaborado en acero al carbón,  acero inoxidable o aluminio. Cumple con SCT 312 y DOT 412. Ideal para transporar ácidos y químicos en general.",
      Capacidad: "21,000 Lts – 28,000 Lts",
      Ejes: "2 y 3 ejes",
    },
    {
      id: 6,
      Titulo: "Tanques Refinados",
      Titulo2: "Tanque Refinado — Gallegos Trailers",
      categories: ["carga liquida"],
      images: productImages.tanquerefinados || [],
      Descripción: `Fabricados en acero inoxidable o aluminio cilíndricos.

      Tanque para transporte de productos refinados de Gallegos Trailers, construido en acero inoxidable 316L o aluminio grado 5454-H32, según especificaciones del cliente. Diseño cilíndrico horizontal con cabezales elípticos, capacidad desde 20,000 hasta 45,000 litros, compartimentado según normativas DOT/ADR.

Equipado con sistema bottom loading que incluye válvulas API de 4”, tuberías internas de carga, sistema de recuperación de vapores y válvula de emergencia neumática. Incorpora rompeolas internos, sensores de sobrellenado, líneas de tierra y conexiones compatibles con terminales automatizadas. Cumple normativas de seguridad para transporte de combustibles, como UL-58 y NFPA 385.`,
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
      Titulo: "Plataformas",
      Titulo2: "Plataformas - Gallegos Trailers",
      categories: ["carga seca"],
      images: productImages.plataformas || [],
      Descripción:
        "Piso disponible en madera pino o apitong, plasti tabla o antiderrapante cal. 14. Concha recta de 1.20 mts. de altura.",
      Disponible: "43, 48 y 53 ft o la medida que su operación requiera.",
      Suspensión: "Suspensión neumática o mecanica en 2 y 3 ejes.",
    },
    {
      id: 12,
      Titulo: "Sider",
      Titulo2: "Semirremolque Sider - Gallegos Trailers",
      categories: ["carga seca", "transporte de bebida"],
      images: productImages.siders || [],
      Descripción:
        `El Semirremolque Sider de Gallegos Trailers está diseñado para ofrecer alta capacidad de carga y resistencia, con una plataforma fabricada en acero o en configuración híbrida, asegurando bajo peso sin sacrificar la robustez.

Equipado con cortinas de vinilo de alta resistencia, este semirremolque permite un fácil acceso y protección de la carga, adaptándose a diversos tipos de productos.

Su estructura optimizada facilita la maniobrabilidad y eficiencia en el transporte, siendo ideal para la logística de cargas generales, tanto en trayectos cortos como largos.

Lleva cortinas reforzadas en marca kinedyne y sistema de anclaje de carga con cintas de 2” y 4” de alta resistencia, garantizando la seguridad y estabilidad de la carga durante el transporte.`,
    },
    {
      id: 13,
      Titulo: "Sider Tarp",
      Titulo2: "Semirremolque Tarp All - Gallegos Trailers",
      categories: ["carga seca", "transporte de bebida"],
      images: productImages.siderstarp || [],
      Descripción:
        `El Semirremolque Tarp All de Gallegos Trailers está diseñado para ofrecer una solución flexible y eficiente en el transporte de cargas generales. Equipado con un sistema de lona tipo "tarp" de alta resistencia, este semirremolque proporciona una cobertura total, protegiendo la carga de condiciones climáticas adversas y garantizando mayor seguridad. 

Su estructura robusta y su plataforma optimizada permiten una carga y descarga más rápida y eficiente.

 Ideal para el transporte de productos diversos que requieren protección adicional sin sacrificar la facilidad de acceso, descarga lateral o posterior en muelle`,
    },
    {
      id: 14,
      Titulo: "Silos",
      Titulo2: "Silos - Gallegos Trailers",
      categories: ["transportes especiales"],
      images: productImages.silos || [],
      Descripción:
        "Silos de alta capacidad y resistencia, diseñados para el almacenamiento seguro y eficiente de productos a granel, garantizando protección y fiabilidad en todo momento.",
      Capacidad: "Desde 30 hasta 53 pies.",
    },
    {
      id: 15,
      Titulo: "Tolva de Acero",
      Titulo2: "Tolva en Acero Tipo Cementera - Gallegos Trailers",
      categories: ["carga a granel"],
      images: productImages.tolvasdeacero || [],
      description:
        `La Tolva en Acero Tipo Cementera de Gallegos Trailers está diseñada para el transporte eficiente de materiales a granel, como cemento, cal y otros productos similares. 

Fabricada con acero de alta resistencia, esta tolva garantiza una larga vida útil y alta capacidad de carga. 

Su diseño optimizado facilita la descarga rápida y controlada del material, asegurando un manejo eficiente durante el transporte y descarga. Ideal para la industria cementera y de la construcción, esta tolva es perfecta para operaciones que requieren resistencia y eficiencia en el manejo de materiales a granel.`,
    },
    {
      id: 16,
      Titulo: "Tolva de Aluminio",
      Titulo2: "Tolva en Aluminio - Gallegos Trailers",
      categories: ["carga a granel"],
      images: productImages.tolvasdealuminio || [],
      Descripción:
        "La Tolva en Aluminio de Gallegos Trailers está diseñada para ofrecer una solución de transporte eficiente y liviana, especialmente para materiales a granel como granos, fertilizantes y productos similares. Fabricada con aluminio de alta calidad, esta tolva proporciona una gran capacidad de carga sin sacrificar el peso, lo que optimiza el consumo de combustible y la maniobrabilidad del remolque.",
      Ventajas_Técnicas: "-------------------------------------------------",
      Ligereza:"El uso de aluminio reduce el peso total, permitiendo mayores cargas útiles y mejor eficiencia en el transporte.",
      Durabilidad: "Resistente a la corrosión, lo que aumenta su vida útil, especialmente en condiciones climáticas adversas.",
      Capacidad_de_Carga:"Amplia capacidad de carga para transporte de materiales a granel, con diseño optimizado para maximizar el volumen sin comprometer la estabilidad.",
    },
    {
      id: 17,
      Titulo: "Volco sobre Chasis",
      Titulo2: "Volco sobre Chasis - Gallegos Trailers",
      categories: ["mineria", "equipos sobre chasis", "carga a granel"],
      images: productImages.volcochasis || [],
      Descripción:
        "Transporte de agregados, materiales abrasivos y de alto impacto.",
      Capacidad: "12M3 a 29M3",
      Incluye: "puertas de gravedad y puertas neumáticas.",
    },
    {
      id: 18,
      Titulo: "Volco HYBRID YACH",
      Titulo2: "Volco Híbrido Yach - Gallegos Trailers",
      categories: ["mineria"],
      images: productImages.volcohibrido || [],
      Descripción:
        `El Volco Hybrid Yacht de Gallegos Trailers está diseñado para el transporte eficiente de materiales pesados y exigentes en la industria minera. Su construcción ligera, con paredes en aluminio de alta resistencia, permite una mayor capacidad de carga útil, optimizando el rendimiento del remolque sin comprometer su robustez.`,
      Capacidad: "12M3 a 29M3",
      Incluye: "puertas de gravedad y puertas neumáticas.",
    },
    {
      id: 19,
      Titulo: "Volco Piraña",
      Titulo2: "Volco Piraña - Gallegos Trailers",
      categories: ["mineria"],
      images: productImages.volcopiraña || [],
      descripción:
        `El Volco Piraña de Gallegos Trailers está diseñado para ofrecer una solución de transporte eficiente y resistente, ideal para el manejo de cargas pesadas en condiciones extremas. Con diferentes capacidades de carga, este semirremolque está construido con un diseño robusto que asegura durabilidad y resistencia en operaciones de alto rendimiento, siendo perfecto para sectores como la minería, construcción y transporte de materiales pesados.`	,
      Características_Principales: "-------------------------------------------------",
      Diferentes_Capacidades: "Disponible en una variedad de capacidades de carga para adaptarse a diferentes necesidades operativas.",
      Diseño_Robusto: "Su construcción sólida y reforzada con materiales de alta calidad garantiza una larga vida útil, incluso en condiciones de trabajo intensas.",
      Versatilidad: "Ideal para el transporte de materiales a granel y cargas pesadas, manteniendo un rendimiento óptimo bajo diversos tipos de carga.",
      Alta_Resistencia: "Estructura diseñada para resistir impactos, desgaste y condiciones",
    },
    {
      id: 20,
      Titulo: "Chasis Porta Contenedor",
      Titulo2: "Chasis Porta Contenedor - Gallegos Trailers",
      categories: ["transportes especiales"],
      images: productImages.portaContenedor || [],
      Descripción:
        `El Chasis Porta Contenedor de Gallegos Trailers está diseñado para ofrecer una solución eficiente y robusta para el transporte de contenedores. Con una construcción sólida y resistente, este chasis garantiza un manejo seguro y eficiente de cargas pesadas, optimizando el rendimiento del remolque en operaciones exigentes.
Su diseño especializado permite una carga y descarga rápida y controlada, asegurando un flujo constante de material y minimizando el tiempo de inactividad. Ideal para la industria del transporte marítimo y terrestre, el Chasis Porta Contenedor es la elección perfecta para quienes buscan durabilidad y eficiencia en sus operaciones.`,

    },
    {
      id: 21,
      Titulo: "Tolvas Cementeras",
      Titulo2: "Tolvas Cementeras - Gallegos Trailers",
      categories: ["carga a granel", "equipos sobre chasis", ],
      images: productImages.tolvaCementera || [],
      Descripción:
        `Las Tolvas Cementeras de Gallegos Trailers están diseñadas para ofrecer una solución eficiente y robusta para el transporte de cemento y otros materiales a granel. Con una construcción sólida y resistente, estas tolvas garantizan un manejo seguro y eficiente de cargas pesadas, optimizando el rendimiento del remolque en operaciones exigentes.
Su diseño especializado permite una descarga rápida y controlada, asegurando un flujo constante de material y minimizando el tiempo de inactividad. Ideal para la industria de la construcción y el transporte de materiales pesados, las Tolvas Cementeras son la elección perfecta para quienes buscan durabilidad y eficiencia en sus operaciones.`,
      Capacidad: "12M3 a 29M3",
      Incluye: "puertas de gravedad y puertas neumáticas.",
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
