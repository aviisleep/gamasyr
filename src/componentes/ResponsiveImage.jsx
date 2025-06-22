import { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

const ResponsiveImage = ({ 
  src, 
  alt, 
  className = "", 
  sizes = "100vw",
  breakpoints = {
    mobile: 768,
    tablet: 1024,
    desktop: 1920
  },
  imageSizes = {
    thumbnail: 150,
    small: 300,
    medium: 600,
    large: 1200,
    xlarge: 1920
  },
  ...props 
}) => {
  const [currentSize, setCurrentSize] = useState('medium');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      if (width <= breakpoints.mobile) {
        setCurrentSize('small');
      } else if (width <= breakpoints.tablet) {
        setCurrentSize('medium');
      } else if (width <= breakpoints.desktop) {
        setCurrentSize('large');
      } else {
        setCurrentSize('xlarge');
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => window.removeEventListener('resize', updateSize);
  }, [breakpoints]);

  // Generar srcSet para diferentes tamaños
  const generateSrcSet = (originalSrc) => {
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    const ext = originalSrc.match(/\.[^/.]+$/)?.[0] || '.jpg';
    
    return Object.entries(imageSizes)
      .map(([size, width]) => `${baseName}-${size}${ext} ${width}w`)
      .join(', ');
  };

  // Generar URL para el tamaño actual
  const generateCurrentSrc = (originalSrc) => {
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    const ext = originalSrc.match(/\.[^/.]+$/)?.[0] || '.jpg';
    
    // Si es una imagen importada (desde assets), usar el tamaño actual
    if (originalSrc.includes('/assets/')) {
      return `${baseName}-${currentSize}${ext}`;
    }
    
    return originalSrc;
  };

  // Generar WebP srcSet
  const generateWebPSrcSet = (originalSrc) => {
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    
    return Object.entries(imageSizes)
      .map(([size, width]) => `${baseName}-${size}.webp ${width}w`)
      .join(', ');
  };

  const currentSrc = generateCurrentSrc(src);
  const srcSet = generateSrcSet(src);
  const webpSrcSet = generateWebPSrcSet(src);

  return (
    <picture className={`responsive-image-container ${className}`}>
      {/* WebP source para navegadores que lo soportan */}
      <source
        srcSet={webpSrcSet}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* Imagen original como fallback */}
      <OptimizedImage
        src={currentSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className="responsive-image"
        {...props}
      />
    </picture>
  );
};

export default ResponsiveImage; 