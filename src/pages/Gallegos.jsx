import Menu from "../componentes/Menu";
import Footer from "../componentes/footer/Footer";
import ProductModal from "../componentes/ProductModal"; // Asegúrate de importar el nuevo componente
import { useState } from "react";

// Importa las imágenes correspondientes
import cajaseca1 from "../assets/productos/cajasecas/cajaseca1.jpg";
import cajaseca2 from "../assets/productos/cajasecas/cajaseca2.jpg";
import cajaseca3 from "../assets/productos/cajasecas/cajaseca3.jpg";
import cajaseca4 from "../assets/productos/cajasecas/cajaseca4.jpg";
import cajaseca5 from "../assets/productos/cajasecas/cajaseca5.jpg";
import refri1 from "../assets/productos/refrigeradas/refri1.png";
import refri2 from "../assets/productos/refrigeradas/refri2.png";
import img6 from "../assets/productos/tanques/tanque1.jpg";
import img7 from "../assets/productos/tanques/tanque 2.jpg";
import logogallegos from "../assets/imagenes/Logo-Gallegos-1536x552.png";

const Gallegos = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      id: 1,
      title: "Cajas Secas",
      img: [cajaseca1],
      images: [cajaseca1, cajaseca2, cajaseca3, cajaseca4, cajaseca5], // Imágenes de "cajas secas" para "cajas secas"
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
      title: "Refrigeradas",
      img: [refri1],
      images: [refri1, refri2], // Imágenes de "cajas secas" para "cajas secas"
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
      title: "Chasis",
      img: img6,
      link: "https://gallegos.com.mx/categoria-producto/chasis/",
      images: [img6, img7], // Imágenes de "tanques" para "Chasis"
    },
  ];

  return (
    <div className="py-40 gallegos-page">
      <Menu />

      {/* Contenedor para el título y el logo */}
      <div className="py-6 bg-gray-800 ">
        <div className="container mx-auto text-center">
          <img src={logogallegos} alt="Logo" className="w-40 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-white">Catálogo</h2>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto catalogo-content">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden bg-white rounded-lg shadow-md jet-listing-grid__item"
            >
              <img
                decoding="async"
                src={product.img}
                alt={product.title}
                loading="lazy"
                className="object-cover w-full h-48"
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
          ))}
        </div>
      </div>

      {isModalOpen && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}

      <Footer />
    </div>
  );
};

export default Gallegos;
