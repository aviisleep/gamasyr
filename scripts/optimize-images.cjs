const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuración
const IMAGE_DIRECTORIES = [
  'src/assets/imagenes',
  'src/assets/productos',
  'public'
];

const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.gif'];
const MAX_WIDTH = 1920;
const QUALITY = 85;

// Verificar si ImageMagick está instalado
function checkImageMagick() {
  try {
    execSync('magick --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.log('❌ ImageMagick no está instalado. Por favor instálalo desde: https://imagemagick.org/');
    return false;
  }
}

// Obtener todas las imágenes en un directorio
function getImagesInDirectory(dir) {
  const images = [];
  
  if (!fs.existsSync(dir)) {
    return images;
  }
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      images.push(...getImagesInDirectory(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        images.push(filePath);
      }
    }
  });
  
  return images;
}

// Optimizar una imagen
function optimizeImage(imagePath) {
  const ext = path.extname(imagePath);
  const baseName = imagePath.replace(ext, '');
  const webpPath = `${baseName}.webp`;
  
  try {
    // Crear versión WebP
    const webpCommand = `magick "${imagePath}" -resize ${MAX_WIDTH}x -quality ${QUALITY} "${webpPath}"`;
    execSync(webpCommand, { stdio: 'ignore' });
    
    // Comprimir imagen original
    const compressCommand = `magick "${imagePath}" -resize ${MAX_WIDTH}x -quality ${QUALITY} "${imagePath}"`;
    execSync(compressCommand, { stdio: 'ignore' });
    
    console.log(`✅ Optimizada: ${path.basename(imagePath)}`);
    return true;
  } catch (error) {
    console.log(`❌ Error optimizando: ${path.basename(imagePath)}`);
    return false;
  }
}

// Generar reporte de optimización
function generateReport(originalSizes, optimizedSizes) {
  console.log('\n📊 Reporte de Optimización:');
  console.log('========================');
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  Object.keys(originalSizes).forEach(imagePath => {
    const originalSize = originalSizes[imagePath];
    const optimizedSize = optimizedSizes[imagePath] || originalSize;
    const savings = originalSize - optimizedSize;
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
    
    totalOriginalSize += originalSize;
    totalOptimizedSize += optimizedSize;
    
    console.log(`${path.basename(imagePath)}:`);
    console.log(`  Original: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`  Optimizada: ${(optimizedSize / 1024).toFixed(1)} KB`);
    console.log(`  Ahorro: ${(savings / 1024).toFixed(1)} KB (${savingsPercent}%)`);
    console.log('');
  });
  
  const totalSavings = totalOriginalSize - totalOptimizedSize;
  const totalSavingsPercent = ((totalSavings / totalOriginalSize) * 100).toFixed(1);
  
  console.log('📈 Totales:');
  console.log(`  Tamaño original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Tamaño optimizado: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Ahorro total: ${(totalSavings / 1024 / 1024).toFixed(2)} MB (${totalSavingsPercent}%)`);
}

// Función principal
function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  
  if (!checkImageMagick()) {
    return;
  }
  
  const allImages = [];
  
  // Obtener todas las imágenes
  IMAGE_DIRECTORIES.forEach(dir => {
    const images = getImagesInDirectory(dir);
    allImages.push(...images);
  });
  
  if (allImages.length === 0) {
    console.log('❌ No se encontraron imágenes para optimizar.');
    return;
  }
  
  console.log(`📁 Encontradas ${allImages.length} imágenes para optimizar.\n`);
  
  const originalSizes = {};
  const optimizedSizes = {};
  let successCount = 0;
  
  // Obtener tamaños originales
  allImages.forEach(imagePath => {
    try {
      const stats = fs.statSync(imagePath);
      originalSizes[imagePath] = stats.size;
    } catch (error) {
      console.log(`❌ Error leyendo: ${path.basename(imagePath)}`);
    }
  });
  
  // Optimizar imágenes
  allImages.forEach(imagePath => {
    if (optimizeImage(imagePath)) {
      successCount++;
      
      // Obtener tamaño optimizado
      try {
        const stats = fs.statSync(imagePath);
        optimizedSizes[imagePath] = stats.size;
      } catch (error) {
        optimizedSizes[imagePath] = originalSizes[imagePath];
      }
    }
  });
  
  console.log(`\n✅ Optimización completada: ${successCount}/${allImages.length} imágenes procesadas.`);
  
  // Generar reporte
  generateReport(originalSizes, optimizedSizes);
  
  // Crear archivo de configuración para el componente OptimizedImage
  const configPath = 'src/utils/imageConfig.js';
  const configContent = `// Configuración de imágenes optimizadas
// Generado automáticamente por optimize-images.js

export const imageConfig = {
  // Configuración de lazy loading
  lazyLoading: {
    threshold: 100,
    effect: 'blur',
    placeholder: true
  },
  
  // Configuración de WebP
  webp: {
    enabled: true,
    quality: ${QUALITY},
    maxWidth: ${MAX_WIDTH}
  },
  
  // Configuración de compresión
  compression: {
    quality: ${QUALITY},
    maxWidth: ${MAX_WIDTH},
    progressive: true
  },
  
  // Imágenes críticas (above the fold)
  criticalImages: [
    '/src/assets/imagenes/Logo-Gallegos-1536x552.png',
    '/src/assets/imagenes/logo trielht.png',
    '/src/assets/imagenes/logodorado.png'
  ],
  
  // Configuración de responsive
  responsive: {
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1920
    },
    sizes: {
      thumbnail: 150,
      small: 300,
      medium: 600,
      large: 1200,
      xlarge: 1920
    }
  }
};

export default imageConfig;
`;
  
  try {
    fs.writeFileSync(configPath, configContent);
    console.log(`\n📝 Configuración guardada en: ${configPath}`);
  } catch (error) {
    console.log(`\n❌ Error guardando configuración: ${error.message}`);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  main();
}

module.exports = { main, optimizeImage, getImagesInDirectory }; 