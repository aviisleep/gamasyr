const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuración
const LIGHTHOUSE_CONFIG = {
  chromeFlags: '--headless --no-sandbox --disable-gpu',
  output: 'html',
  outputPath: './lighthouse-report.html',
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  formFactor: 'desktop'
};

// Métricas objetivo
const TARGET_METRICS = {
  performance: 90,
  accessibility: 95,
  'best-practices': 90,
  seo: 95,
  lcp: 2500, // ms
  fid: 100,  // ms
  cls: 0.1,  // ratio
  fcp: 1800  // ms
};

// Verificar si Lighthouse está instalado
function checkLighthouse() {
  try {
    execSync('lighthouse --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.log('❌ Lighthouse no está instalado. Instalando...');
    try {
      execSync('npm install -g lighthouse', { stdio: 'inherit' });
      return true;
    } catch (installError) {
      console.log('❌ Error instalando Lighthouse:', installError.message);
      return false;
    }
  }
}

// Ejecutar Lighthouse
function runLighthouse(url) {
  console.log(`🔍 Analizando: ${url}`);
  
  const command = `lighthouse ${url} --chrome-flags="${LIGHTHOUSE_CONFIG.chromeFlags}" --output=${LIGHTHOUSE_CONFIG.output} --output-path=${LIGHTHOUSE_CONFIG.outputPath} --only-categories=${LIGHTHOUSE_CONFIG.onlyCategories.join(',')} --form-factor=${LIGHTHOUSE_CONFIG.formFactor}`;
  
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.log('❌ Error ejecutando Lighthouse:', error.message);
    return false;
  }
}

// Analizar resultados de Lighthouse
function analyzeResults() {
  try {
    const reportPath = path.resolve(LIGHTHOUSE_CONFIG.outputPath);
    if (!fs.existsSync(reportPath)) {
      console.log('❌ No se encontró el reporte de Lighthouse');
      return null;
    }
    
    const reportContent = fs.readFileSync(reportPath, 'utf8');
    
    // Extraer métricas del reporte HTML
    const performanceMatch = reportContent.match(/Performance.*?(\d+)/);
    const accessibilityMatch = reportContent.match(/Accessibility.*?(\d+)/);
    const bestPracticesMatch = reportContent.match(/Best Practices.*?(\d+)/);
    const seoMatch = reportContent.match(/SEO.*?(\d+)/);
    
    const results = {
      performance: performanceMatch ? parseInt(performanceMatch[1]) : 0,
      accessibility: accessibilityMatch ? parseInt(accessibilityMatch[1]) : 0,
      'best-practices': bestPracticesMatch ? parseInt(bestPracticesMatch[1]) : 0,
      seo: seoMatch ? parseInt(seoMatch[1]) : 0
    };
    
    return results;
  } catch (error) {
    console.log('❌ Error analizando resultados:', error.message);
    return null;
  }
}

// Generar reporte de performance
function generateReport(results) {
  console.log('\n📊 Reporte de Performance - Gama SYR');
  console.log('=====================================');
  
  if (!results) {
    console.log('❌ No se pudieron obtener resultados');
    return;
  }
  
  let allPassed = true;
  
  Object.keys(results).forEach(category => {
    const score = results[category];
    const target = TARGET_METRICS[category];
    const status = score >= target ? '✅' : '❌';
    const color = score >= target ? '\x1b[32m' : '\x1b[31m';
    
    console.log(`${status} ${category.toUpperCase()}: ${color}${score}/100\x1b[0m (Objetivo: ${target})`);
    
    if (score < target) {
      allPassed = false;
    }
  });
  
  console.log('\n📈 Recomendaciones:');
  
  if (results.performance < TARGET_METRICS.performance) {
    console.log('🚀 Performance:');
    console.log('  - Optimizar imágenes con WebP');
    console.log('  - Implementar lazy loading');
    console.log('  - Minificar CSS y JavaScript');
    console.log('  - Usar CDN para recursos estáticos');
  }
  
  if (results.accessibility < TARGET_METRICS.accessibility) {
    console.log('♿ Accesibilidad:');
    console.log('  - Agregar alt text a todas las imágenes');
    console.log('  - Mejorar contraste de colores');
    console.log('  - Asegurar navegación por teclado');
    console.log('  - Agregar landmarks ARIA');
  }
  
  if (results['best-practices'] < TARGET_METRICS['best-practices']) {
    console.log('🔧 Mejores Prácticas:');
    console.log('  - Usar HTTPS');
    console.log('  - Configurar headers de seguridad');
    console.log('  - Optimizar Service Worker');
    console.log('  - Implementar error boundaries');
  }
  
  if (results.seo < TARGET_METRICS.seo) {
    console.log('🔍 SEO:');
    console.log('  - Optimizar meta tags');
    console.log('  - Mejorar estructura de headings');
    console.log('  - Agregar datos estructurados');
    console.log('  - Optimizar sitemap.xml');
  }
  
  console.log(`\n${allPassed ? '🎉 ¡Todos los objetivos cumplidos!' : '⚠️  Algunos objetivos no se cumplieron'}`);
  
  return allPassed;
}

// Analizar bundle size
function analyzeBundle() {
  console.log('\n📦 Análisis de Bundle:');
  
  try {
    const distPath = path.resolve('./dist');
    if (!fs.existsSync(distPath)) {
      console.log('❌ No se encontró la carpeta dist. Ejecuta npm run build primero.');
      return;
    }
    
    const assetsPath = path.join(distPath, 'assets');
    if (!fs.existsSync(assetsPath)) {
      console.log('❌ No se encontró la carpeta assets.');
      return;
    }
    
    const files = fs.readdirSync(assetsPath);
    let totalSize = 0;
    
    files.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      totalSize += stats.size;
      
      console.log(`  📄 ${file}: ${sizeKB} KB`);
    });
    
    const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);
    console.log(`\n📊 Tamaño total: ${totalSizeMB} MB`);
    
    if (totalSize > 2 * 1024 * 1024) { // 2MB
      console.log('⚠️  Bundle muy grande. Considera optimizar:');
      console.log('  - Implementar code splitting');
      console.log('  - Optimizar imágenes');
      console.log('  - Remover dependencias no utilizadas');
    } else {
      console.log('✅ Tamaño de bundle aceptable');
    }
    
  } catch (error) {
    console.log('❌ Error analizando bundle:', error.message);
  }
}

// Función principal
function main() {
  console.log('🚀 Iniciando análisis de performance...\n');
  
  // Verificar Lighthouse
  if (!checkLighthouse()) {
    return;
  }
  
  // URL a analizar (cambiar según tu configuración)
  const url = process.argv[2] || 'http://localhost:4173';
  
  // Ejecutar Lighthouse
  if (runLighthouse(url)) {
    // Analizar resultados
    const results = analyzeResults();
    const passed = generateReport(results);
    
    // Analizar bundle
    analyzeBundle();
    
    // Generar resumen
    console.log('\n📋 Resumen:');
    console.log('===========');
    console.log(`🔗 URL analizada: ${url}`);
    console.log(`📅 Fecha: ${new Date().toLocaleString('es-CO')}`);
    console.log(`📊 Estado: ${passed ? '✅ Aprobado' : '❌ Necesita mejoras'}`);
    
    if (!passed) {
      process.exit(1);
    }
  } else {
    console.log('❌ Error en el análisis de performance');
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = {
  runLighthouse,
  analyzeResults,
  generateReport,
  analyzeBundle
}; 