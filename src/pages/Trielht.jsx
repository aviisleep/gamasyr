import Menu from "../componentes/Menu";
import Footer from "../componentes/footer/Footer";
import ProductModal from "../componentes/ProductModal";
import { useState } from "react";
import { productImages } from "../utils/productImagesTrielht"; // Importa las imágenes organizadas
import logotrielht from "../assets/imagenes/logo trielht.png";

const Trielht = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const products = [
    {
      id: 1,
      titulo: "Aluminio 100%",
      category: "granos",
      images: productImages.aluminio || [], // Asegúrate de que no sea undefined
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
      titulo: "Grano Aluminio",
      category: "granos",
      images: productImages.granoaluminio || [], // Asegúrate de que no sea undefined
      description: "Descripción del producto cajas secas",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
    {
      id: 3,
      titulo: "lechones",
      category: "cerdo",
      images: productImages.Lechones || [], // Asegúrate de que no sea undefined
      description: "Descripción del producto cajas secas",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
    {
      id: 4,
      titulo: "Madres y Crias",
      category: "cerdo",
      images: productImages.madresyCrias || [], // Asegúrate de que no sea undefined
      description: "Descripción del producto cajas secas",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
    {
      id: 5,
      titulo: "Suenos",
      category: "cerdo",
      images: productImages.suenos || [], // Asegúrate de que no sea undefined
      description: "Descripción del producto cajas secas",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
  ];

  const filtrarProductos =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="py-40">
      <Menu />

      {/* Contenedor para el título y el logo */}
      <div className="py-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <img src={logotrielht} alt="Logo" className="w-40 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-white">Catálogo</h2>
          <div className="flex justify-center mt-4 space-x-4">
            {["aves", "cerdo", "granos", "all"].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 text-white rounded ${
                  selectedCategory === category
                    ? "bg-blue-500"
                    : "bg-gray-500 hover:bg-blue-500"
                }`}
                aria-label={`Filtrar productos de ${category}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
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
                src={product.images?.[0] || "ruta/a/imagen/por/defecto.jpg"} // Validación
                alt={product.titulo}
                loading="lazy"
                className="object-cover w-full h-64"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.titulo}
                </h2>
                <button
                  onClick={() => handleOpenModal(product)}
                  className="text-blue-500 hover:underline"
                  aria-label={`Ver detalles de ${product.titulo}`}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}

      <Footer />
    </div>
  );
};

export default Trielht;
