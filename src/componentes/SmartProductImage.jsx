import OptimizedImage from './OptimizedImage';

const SmartProductImage = ({ 
  src, 
  alt, 
  productType, 
  className = "", 
  width, 
  height,
  ...props 
}) => {
  // Productos que se ven mejor con object-cover (imágenes panorámicas o donde el fondo es importante)
  const coverProducts = [
    'Van Seco',
    'Van Refrigerado',
    'Plataformas',
    'Sider'
  ];

  // Productos que necesitan object-contain para mostrar todo el equipo (equipos verticales o detallados)
  const containProducts = [
    'Tanque de Asfalto',
    'Tanques Especiales',
    'Silos',
    'Tolva de Acero',
    'Tolva de Aluminio',
    'Volco sobre Chasis',
    'Volco Piraña',
    'Chasis Porta Contenedor',
    'Tolvas Cementeras'
  ];

  // Productos que necesitan object-cover pero con object-position ajustado para mostrar el equipo
  const coverWithBottomPosition = [
    'Grado Alimenticio',
    'Tanques Refinados',
    'Botelleros',
    'Cama Baja',
    'Dollys',
    'Furgon Composite',
    'Sider Tarp',
    'Volco HYBRID YACH'
  ];

  // Determinar el object-fit basado en el tipo de producto
  const getObjectFit = () => {
    if (coverProducts.includes(productType)) {
      return 'object-cover';
    }
    if (coverWithBottomPosition.includes(productType)) {
      return 'object-cover'; // Usar cover pero con position ajustado
    }
    if (containProducts.includes(productType)) {
      return 'object-contain';
    }
    // Por defecto, usar contain para mostrar todo el equipo
    return 'object-contain';
  };

  // Determinar el background basado en el object-fit
  const getBackground = () => {
    return getObjectFit() === 'object-contain' ? 'bg-gray-100' : 'bg-transparent';
  };

  // Determinar el object-position para centrar mejor el equipo
  const getObjectPosition = () => {
    // Productos que necesitan mostrar la parte inferior (donde está el equipo)
    if (coverWithBottomPosition.includes(productType)) {
      return 'object-bottom'; // Para estos productos, mostrar la parte inferior donde está el equipo
    }
    if (productType === 'Volco Piraña' || productType === 'Volco sobre Chasis') {
      return 'object-bottom'; // Para volcos, mostrar la parte inferior donde está el equipo
    }
    if (productType === 'Cama Baja' || productType === 'Dollys') {
      return 'object-center'; // Para equipos especiales, centrar
    }
    return 'object-center'; // Por defecto, centrar
  };

  // Determinar estilos inline específicos para productos problemáticos
  const getInlineStyles = () => {
    const baseStyles = {};
    
    // Ajustes específicos por producto para mostrar el equipo en lugar del cielo
    // Ocultar 40% superior, mostrar 60% inferior
    switch (productType) {
      case 'Grado Alimenticio':
        baseStyles.objectPosition = 'center 60%';
        break;
      case 'Tanques Refinados':
        baseStyles.objectPosition = 'center 60%';
        break;
      case 'Botelleros':
        baseStyles.objectPosition = 'center 60%';
        break;
      case 'Cama Baja':
        baseStyles.objectPosition = 'center 60%';
        break;
      case 'Dollys':
        baseStyles.objectPosition = 'center 60%';
        break;
      case 'Furgon Composite':
        baseStyles.objectPosition = 'center 60%';
        break;
      case 'Sider Tarp':
        baseStyles.objectPosition = 'center 60%';
        break;
      case 'Volco HYBRID YACH':
        baseStyles.objectPosition = 'center 60%';
        break;
      default:
        break;
    }
    
    return baseStyles;
  };

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`w-full h-full ${getObjectFit()} ${getObjectPosition()} ${getBackground()} product-card-image ${className}`}
      style={getInlineStyles()}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default SmartProductImage; 