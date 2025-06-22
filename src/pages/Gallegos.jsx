import { useState, useMemo } from "react";
import ProductModal from "../componentes/ProductModal";
import ProductCard from "../componentes/ProductCard";
import CategoryFilter from "../componentes/CategoryFilter";
import PageHeader from "../componentes/PageHeader";
import { gallegosProducts, categories } from "../data/gallegosProducts";
import { SEO } from "../componentes/SEO";
import { getBreadcrumbStructuredData } from "../utils/structuredData";
import { useT } from '../hooks/useT';

const Gallegos = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const t = useT();

  const breadcrumbs = [
    { name: t('home'), url: "https://gamasyr.com/" },
    { name: t('equipos'), url: "https://gamasyr.com/gallegos" },
    { name: "Gallegos Trailers", url: "https://gamasyr.com/gallegos" }
  ];

  const structuredData = getBreadcrumbStructuredData(breadcrumbs);

  // Filtrar productos basado en la categoría seleccionada
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return gallegosProducts;
    }
    return gallegosProducts.filter(product => 
      product.categories.includes(selectedCategory)
    );
  }, [selectedCategory]);

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

  return (
    <>
      <SEO
        title={t('catalogoGallegosTitulo')}
        description={t('catalogoGallegosDescripcion')}
        keywords="gallegos trailers, remolques gallegos, van seco, van refrigerado, tanques, botelleros, cama baja, dollys, furgon composite, plataformas, sider, silos, volco"
        url="/gallegos"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <main className="container px-4 py-12 mx-auto max-w-7xl">
          {/* Header Section */}
          <PageHeader
            title={t('catalogoGallegosTitulo')}
            description={t('catalogoGallegosDescripcion')}
          />

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* Products Grid */}
          <section aria-label="Productos Gallegos Trailers">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
            
            {/* Mensaje cuando no hay productos */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚛</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {t('noProductos')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('noProductosDescripcion')}
                </p>
              </div>
            )}
          </section>
        </main>

        {/* Modal de Producto */}
        {isModalOpen && selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
};

export default Gallegos; 