import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  placeholderSrc,
  webpSrc,
  priority = false,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [webpError, setWebpError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Función para generar WebP URL si no se proporciona
  const generateWebPUrl = (originalSrc) => {
    if (webpSrc) return webpSrc;
    
    // Si es una imagen importada (URL absoluta), no generar WebP automáticamente
    if (originalSrc && (originalSrc.startsWith('http') || originalSrc.startsWith('blob:'))) {
      return originalSrc; // Usar la imagen original para URLs importadas
    }
    
    // Si es una imagen estática en public, intentar generar WebP
    if (originalSrc && originalSrc.includes('/assets/') && !originalSrc.startsWith('http')) {
      const baseName = originalSrc.replace(/\.[^/.]+$/, '');
      return `${baseName}.webp`;
    }
    
    return originalSrc;
  };

  // Función para generar placeholder
  const generatePlaceholder = (originalSrc) => {
    if (placeholderSrc) return placeholderSrc;
    
    // Crear un placeholder simple basado en las dimensiones
    const w = width || 400;
    const h = height || 300;
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'%3E%3Crect width='${w}' height='${h}' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='Arial' font-size='16'%3ECargando...%3C/text%3E%3C/svg%3E`;
  };

  const handleError = () => {
    console.log('Error cargando imagen:', src);
    setImageError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleWebPError = () => {
    setWebpError(true);
  };

  // Para imágenes importadas (URLs absolutas), usar directamente sin WebP
  // Las imágenes importadas con new URL() generan URLs que contienen el dominio local
  const isImportedImage = src && (
    src.startsWith('http') || 
    src.startsWith('blob:') || 
    src.includes('localhost') || 
    src.includes('127.0.0.1')
  );
  
  // Si hay error con WebP o es una imagen importada, usar la imagen original
  const finalSrc = (webpError || isImportedImage) ? src : generateWebPUrl(src);
  const placeholder = generatePlaceholder(src);

  return (
    <div className={`optimized-image-container ${className}`}>
      {priority ? (
        // Para imágenes críticas (above the fold)
        <picture>
          {!webpError && !isImportedImage && (
            <source 
              srcSet={generateWebPUrl(src)} 
              type="image/webp"
              onError={handleWebPError}
            />
          )}
          <img
            src={finalSrc}
            alt={alt}
            width={width}
            height={height}
            className={`optimized-image ${imageError ? 'image-error' : ''} ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onError={handleError}
            onLoad={handleLoad}
            loading="eager"
            {...props}
          />
        </picture>
      ) : (
        // Para imágenes no críticas (lazy loading)
        <LazyLoadImage
          src={finalSrc}
          alt={alt}
          width={width}
          height={height}
          effect="blur"
          placeholderSrc={placeholder}
          className={`optimized-image ${imageError ? 'image-error' : ''}`}
          onError={handleError}
          onLoad={handleLoad}
          threshold={100}
          {...props}
        />
      )}
      
      {/* Loading skeleton */}
      {isLoading && !imageError && (
        <div 
          className="image-skeleton absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite'
          }}
        />
      )}
      
      {/* Fallback para imágenes que fallan */}
      {imageError && (
        <div 
          className="image-fallback"
          style={{
            width: width || '100%',
            height: height || '200px',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
            fontSize: '14px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <span>Imagen no disponible</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 