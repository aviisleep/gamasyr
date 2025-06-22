import SmartProductImage from './SmartProductImage';
import { useT } from '../hooks/useT';

const ProductCard = ({ product, onOpenModal }) => {
  const t = useT();

  // Función para obtener la descripción del producto
  const getProductDescription = () => {
    if (!product.specs) return product.subtitle || '';
    
    // Buscar la primera propiedad que tenga contenido
    const descriptionKeys = [
      'descripción', 'aplicación', 'eficiencia', 'material', 
      'capacidades', 'estructura', 'materiales', 'disponible', 
      'ventajas', 'descripción'
    ];
    
    for (const key of descriptionKeys) {
      if (product.specs[key]) {
        return product.specs[key];
      }
    }
    
    return product.subtitle || '';
  };

  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow product-card transition-colors duration-300">
      <div className="relative h-48 overflow-hidden">
        {product.images && product.images.length > 0 ? (
          <SmartProductImage
            src={product.images[0]}
            alt={`${product.title} - Gallegos Trailers`}
            productType={product.title}
            width={400}
            height={300}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl mb-2">🚛</div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">Sin imagen</span>
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button
            onClick={() => onOpenModal(product)}
            className="px-6 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label={`${t('verDetalles')} ${product.title}`}
          >
            {t('verDetalles')}
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          {t(product.title)}
        </h2>
        
        <p className="mb-4 text-gray-700 dark:text-gray-200 line-clamp-3">
          {t(getProductDescription())}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {product.categories.map((category, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 rounded font-medium"
              >
                {t(category)}
              </span>
            ))}
          </div>
          
          <button
            onClick={() => onOpenModal(product)}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors font-medium"
            aria-label={`${t('verMas')} ${product.title}`}
          >
            <span>{t('verMas')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard; 