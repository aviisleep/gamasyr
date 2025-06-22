# 🚛 Gama SYR - Sitio Web Optimizado

Sitio web moderno y optimizado para Gama SYR, empresa líder en venta de camiones, remolques y servicios de transporte en Colombia.

## 🚀 Características Principales

### ⚡ Performance Optimizada
- **Core Web Vitals** optimizados (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- **Lazy Loading** de imágenes y componentes
- **Service Worker** para cache offline
- **Chunk Splitting** inteligente
- **Compresión WebP** automática
- **Bundle Analysis** integrado

### 🔍 SEO Avanzado
- **Meta tags** optimizados
- **Open Graph** y Twitter Cards
- **Datos estructurados** (Schema.org)
- **Sitemap.xml** automático
- **robots.txt** optimizado
- **Hreflang** para Colombia

### ♿ Accesibilidad Completa
- **WCAG 2.1 AA** compliant
- **Alto contraste** opcional
- **Texto grande** configurable
- **Reducción de movimiento**
- **Navegación por teclado**
- **Screen reader** compatible

### 📱 PWA Ready
- **Manifest.json** completo
- **Service Worker** funcional
- **Offline support**
- **Installable** en dispositivos

## 🛠️ Tecnologías

- **React 18** con Hooks
- **Vite** para build optimizado
- **Tailwind CSS** para estilos
- **React Router** para navegación
- **Framer Motion** para animaciones
- **React Helmet** para SEO
- **Lazy Load Images** para performance

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/gamasyr.git
cd gamasyr

# Instalar dependencias
npm install

# Optimizar imágenes (requiere ImageMagick)
npm run optimize-images

# Iniciar desarrollo
npm run dev
```

## 🚀 Scripts Disponibles

### Desarrollo
```bash
npm run dev              # Servidor de desarrollo
npm run build            # Build de producción
npm run preview          # Preview del build
```

### Optimización
```bash
npm run optimize-images          # Optimizar todas las imágenes
npm run optimize-images:check    # Verificar optimización
npm run build:optimized          # Build con imágenes optimizadas
npm run build:production         # Build optimizado para producción
```

### Análisis
```bash
npm run analyze                  # Analizar bundle
npm run performance              # Análisis de performance con Lighthouse
npm run audit                    # Auditoría de seguridad y linting
```

### Mantenimiento
```bash
npm run lint                     # Linting de código
npm run lint:fix                 # Corregir errores de linting
npm run format                   # Formatear código
npm run clean                    # Limpiar archivos temporales
```

## 📁 Estructura del Proyecto

```
gamasyr/
├── src/
│   ├── componentes/           # Componentes reutilizables
│   │   ├── SEO.jsx           # Componente SEO
│   │   ├── Accessibility.jsx # Componente de accesibilidad
│   │   ├── OptimizedImage.jsx # Imágenes optimizadas
│   │   ├── SmartProductImage.jsx # Imágenes inteligentes
│   │   └── PerformanceMonitor.jsx # Monitor de performance
│   ├── pages/                # Páginas de la aplicación
│   │   ├── Home.jsx          # Página principal
│   │   ├── Gallegos.jsx      # Catálogo Gallegos
│   │   └── Contacto.jsx      # Página de contacto
│   ├── utils/                # Utilidades y configuraciones
│   │   ├── structuredData.js # Datos estructurados
│   │   └── imageConfig.js    # Configuración de imágenes
│   └── assets/               # Recursos estáticos
│       ├── imagenes/         # Imágenes optimizadas
│       └── productos/        # Productos con WebP
├── public/                   # Archivos públicos
│   ├── sw.js                # Service Worker
│   ├── manifest.json        # PWA Manifest
│   ├── sitemap.xml          # Sitemap
│   ├── robots.txt           # Robots.txt
│   └── offline.html         # Página offline
├── scripts/                  # Scripts de optimización
│   ├── optimize-images.js   # Optimización de imágenes
│   └── performance-check.js # Análisis de performance
└── docs/                     # Documentación
    ├── SEO_ACCESSIBILITY_GUIDE.md
    └── IMAGE_OPTIMIZATION_GUIDE.md
```

## 🎯 Optimizaciones Implementadas

### Performance
- ✅ **Vite** con configuración optimizada
- ✅ **Chunk splitting** inteligente
- ✅ **Lazy loading** de rutas y componentes
- ✅ **Service Worker** para cache
- ✅ **Imágenes WebP** con fallback
- ✅ **Preload** de recursos críticos
- ✅ **Minificación** agresiva
- ✅ **Tree shaking** automático

### SEO
- ✅ **Meta tags** dinámicos
- ✅ **Open Graph** completo
- ✅ **Twitter Cards** optimizadas
- ✅ **Datos estructurados** JSON-LD
- ✅ **Sitemap.xml** automático
- ✅ **robots.txt** optimizado
- ✅ **Hreflang** para Colombia
- ✅ **URLs** amigables

### Accesibilidad
- ✅ **WCAG 2.1 AA** compliant
- ✅ **Alto contraste** opcional
- ✅ **Texto grande** configurable
- ✅ **Reducción de movimiento**
- ✅ **Navegación por teclado**
- ✅ **Screen reader** compatible
- ✅ **Focus visible** mejorado
- ✅ **Alt text** descriptivo

### Imágenes
- ✅ **WebP** automático
- ✅ **Lazy loading** inteligente
- ✅ **Responsive images**
- ✅ **Placeholders** personalizados
- ✅ **Error handling** robusto
- ✅ **Compresión** optimizada
- ✅ **Object-fit** inteligente

## 📊 Métricas de Performance

### Objetivos
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTFB (Time to First Byte)**: < 600ms

### Herramientas de Análisis
- **Lighthouse** integrado
- **Core Web Vitals** monitoring
- **Bundle analyzer** automático
- **Performance Monitor** en desarrollo

## 🔧 Configuración Avanzada

### Variables de Entorno
```bash
# .env.local
VITE_API_URL=https://api.gamasyr.com
VITE_GA_ID=G-XXXXXXXXXX
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

### Configuración de Vite
```javascript
// vite.config.js
export default defineConfig({
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@headlessui/react', 'react-icons'],
          'router-vendor': ['react-router-dom']
        }
      }
    }
  }
});
```

## 🚀 Despliegue

### Netlify
```bash
# Configurar build command
npm run build:optimized

# Configurar publish directory
dist
```

### Vercel
```bash
# Configurar framework preset
Vite

# Configurar build command
npm run build:optimized
```

### GitHub Pages
```bash
# Agregar script de deploy
npm run build:optimized
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

## 📈 Monitoreo y Analytics

### Google Analytics
```javascript
// Configurar en index.html
gtag('config', 'G-XXXXXXXXXX', {
  page_title: 'Gama SYR',
  page_location: window.location.href
});
```

### Core Web Vitals
```javascript
// Monitoreo automático en index.html
gtag('event', 'web_vitals', {
  metric_value: lcp.startTime,
  metric_id: 'LCP'
});
```

## 🐛 Solución de Problemas

### Imágenes no se cargan
1. Verificar rutas en `src/assets/`
2. Ejecutar `npm run optimize-images`
3. Verificar configuración de WebP
4. Revisar lazy loading threshold

### Performance baja
1. Ejecutar `npm run performance`
2. Revisar bundle size con `npm run analyze`
3. Optimizar imágenes con `npm run optimize-images`
4. Verificar Service Worker

### SEO no funciona
1. Verificar meta tags en componentes
2. Revisar sitemap.xml
3. Comprobar robots.txt
4. Verificar datos estructurados

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📞 Soporte

- **Email**: administracion@cyrgama.com
- **WhatsApp**: +57 301 5145137
- **Ubicación**: Calle 15 # 15-15, Cota, Cundinamarca, Colombia

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Vite** por el build tool increíble
- **Tailwind CSS** por el framework de estilos
- **React** por la librería de UI
- **Lighthouse** por las herramientas de performance

---

**Desarrollado con ❤️ para Gama SYR**