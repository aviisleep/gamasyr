import Menu from "../componentes/Menu";
import Footer from "../componentes/footer/Footer";
import ProductModal from "../componentes/ProductModal"; // Asegúrate de importar el nuevo componente
import { useState } from "react";

// Importa las imágenes correspondientes
import aluminio1 from "../assets/productos/trielht/aluminio/aluminio1001.jpg";
import aluminio2 from "../assets/productos/trielht/aluminio/aluminio1002.jpg";
import aluminio3 from "../assets/productos/trielht/aluminio/aluminio1003.jpg";
import aluminio4 from "../assets/productos/trielht/aluminio/aluminio1004.jpg";
import aluminio5 from "../assets/productos/trielht/aluminio/aluminio1005.jpg";
import granoaluminio1 from "../assets/productos/trielht/granoaluminio/granoaluminio1.jpg";
import granoaluminio2 from "../assets/productos/trielht/granoaluminio/granoaluminio2.jpg";
import granoaluminio3 from "../assets/productos/trielht/granoaluminio/granoaluminio3.jpg";
import lechones1 from "../assets/productos/trielht/lechones/lechones1.jpg";
import lechones2 from "../assets/productos/trielht/lechones/lechones2.jpg";
import lechones3 from "../assets/productos/trielht/lechones/lechones3.jpg";
import lechones4 from "../assets/productos/trielht/lechones/lechones4.jpg";
import madresycrias1 from "../assets/productos/trielht/madresycrias/madresycrias1.jpg";
import madresycrias2 from "../assets/productos/trielht/madresycrias/madresycrias2.jpg";
import madresycrias3 from "../assets/productos/trielht/madresycrias/madresycrias3.jpg";
import madresycrias4 from "../assets/productos/trielht/madresycrias/madresycrias4.jpg";
import madresycrias5 from "../assets/productos/trielht/madresycrias/madresycrias5.jpg";
import suenos1 from "../assets/productos/trielht/suenos/suinos1.jpg";
import suenos2 from "../assets/productos/trielht/suenos/suenos2.jpg";
import suenos3 from "../assets/productos/trielht/suenos/suenos3.jpg";
import suenos4 from "../assets/productos/trielht/suenos/suinos4.jpg";
import suenos5 from "../assets/productos/trielht/suenos/suinos5.jpg";
import transporave1 from "../assets/productos/trielht/transporteaves/transporteaves1.jpg";
import transporave2 from "../assets/productos/trielht/transporteaves/transporteaves2.jpg";
import transporave3 from "../assets/productos/trielht/transporteaves/transporteaves3.jpg";

// logo
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
      title: "Aluminio 100%",
      img: [aluminio1],
      images: [aluminio1, aluminio2, aluminio3, aluminio4, aluminio5],
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
      title: "Grano Aluminio",
      img: [granoaluminio1],
      images: [granoaluminio1, granoaluminio2, granoaluminio3],
      description: "Descripción del producto Refrijeradas",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
    {
      id: 3,
      title: "Lechones",
      img: [lechones1],
      images: [lechones1, lechones2, lechones3, lechones4],
      description: "Descripción del producto Lechones",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
    {
      id: 4,
      title: "Madres y Crias",
      img: [madresycrias1],
      images: [
        madresycrias1,
        madresycrias2,
        madresycrias3,
        madresycrias4,
        madresycrias5,
      ],
      description: "Descripción del producto Madres y Crias",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
    {
      id: 5,
      title: "Suinos",
      img: [suenos1],
      images: [suenos1, suenos2, suenos3, suenos4, suenos5],
      description: "Descripción del producto Suenos",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
    {
      id: 6,
      title: "Transporte de Aves",
      img: [transporave1],
      images: [transporave1, transporave2, transporave3],
      description: "Descripción del producto en Transporte de Aves",
      length: "10m",
      corners: "Cuadradas",
      logisticPosts: "Sí",
      highStrengthSteel: "Alta resistencia",
      floor: "Antideslizante",
      regulations: "ISO 9001",
    },
  ];

  // Filtrar productos según la categoría seleccionada
  const filtrarProductos =
    selectedCategory === "all"
      ? products
      : products.filter((product) => {
          if (selectedCategory === "aves")
            return product.title.includes("Aves");
          if (selectedCategory === "cerdo")
            return (
              product.title.includes("Lechones") ||
              product.title.includes("Suinos")
            );
          if (selectedCategory === "granos")
            return product.title.includes("Grano");
          return false;
        });

  return (
    <div className="py-10 gallegos-page">
      <Menu />

      {/* Contenedor para el título y el logo */}
      <div className="py-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <img src={logotrielht} alt="Logo" className="w-40 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-white">Catálogo Trielht</h2>
          <div className="mt-4">
            <button
              onClick={() => handleCategoryChange("aves")}
              className="px-4 py-2 mx-2 text-white bg-blue-500 rounded"
            >
              Aves
            </button>
            <button
              onClick={() => handleCategoryChange("cerdo")}
              className="px-4 py-2 mx-2 text-white bg-blue-500 rounded"
            >
              Cerdo
            </button>
            <button
              onClick={() => handleCategoryChange("granos")}
              className="px-4 py-2 mx-2 text-white bg-blue-500 rounded"
            >
              Granos
            </button>
            <button
              onClick={() => handleCategoryChange("all")}
              className="px-4 py-2 mx-2 text-white bg-gray-500 rounded"
            >
              Todos
            </button>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto catalogo-content">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filtrarProductos.map(
            (
              product // Cambiar aquí de products a filtrarProductos
            ) => (
              <div
                key={product.id}
                className="overflow-hidden bg-white rounded-lg shadow-md jet-listing-grid__item"
              >
                <img
                  decoding="async"
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                  className="object-cover w-full h-49"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="text-blue-500 hover:underline"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}

      <Footer />
    </div>
  );
};

export default Trielht;
