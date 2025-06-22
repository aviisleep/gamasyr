# Guía de Optimización de Imágenes - Gama SYR

## 🎯 Objetivo
Esta guía proporciona las mejores prácticas para optimizar imágenes en el sitio web de Gama SYR, mejorando la velocidad de carga y la experiencia del usuario.

## 🚀 Optimizaciones Implementadas

### 1. Componente OptimizedImage
- ✅ Lazy loading automático
- ✅ Soporte para WebP con fallback
- ✅ Placeholders personalizados
- ✅ Manejo de errores
- ✅ Imágenes críticas (above the fold)

### 2. Componente ResponsiveImage
- ✅ Diferentes tamaños según dispositivo
- ✅ srcSet para múltiples resoluciones
- ✅ WebP automático
- ✅ Optimización por breakpoint

### 3. Lazy Loading
- ✅ Carga diferida con blur effect
- ✅ Threshold configurable
- ✅ Intersection Observer API
- ✅ Placeholders SVG

### 4. Formato WebP
- ✅ Conversión automática
- ✅ Fallback para navegadores antiguos
- ✅ Compresión optimizada
- ✅ Calidad configurable

## 📁 Estructura de Archivos

```
src/
├── componentes/
│   ├── OptimizedImage.jsx      # Componente principal
│   └── ResponsiveImage.jsx     # Imágenes responsive
├── utils/
│   └── imageConfig.js          # Configuración generada
└── assets/
    ├── imagenes/               # Imágenes optimizadas
    └── productos/              # Productos con WebP
scripts/
└── optimize-images.js          # Script de optimización
```

## 🔧 Uso de los Componentes

### OptimizedImage Básico
```jsx
import OptimizedImage from '../componentes/OptimizedImage';

<OptimizedImage
  src="/path/to/image.jpg"
  alt="Descripción de la imagen"
  width={400}
  height={300}
  priority={false} // true para imágenes críticas
/>
```

### ResponsiveImage
```jsx
import ResponsiveImage from '../componentes/ResponsiveImage';

<ResponsiveImage
  src="/path/to/image.jpg"
  alt="Descripción de la imagen"
  sizes="(max-width: 768px) 100vw, 50vw"
  className="custom-class"
/>
```

### Imágenes Críticas (Above the Fold)
```jsx
<OptimizedImage
  src={logogallegos}
  alt="Logo Gallegos Trailers"
  priority={true}
  className="h-16 md:h-20"
/>
```

## 🛠️ Scripts de Optimización

### Optimizar Todas las Imágenes
```bash
npm run optimize-images
```

### Verificar Optimización
```bash
npm run optimize-images:check
```

### Build con Imágenes Optimizadas
```bash
npm run build:optimized
```

### Analizar Bundle
```bash
npm run analyze
```

## 📊 Configuración de Optimización

### Parámetros Actuales
- **Calidad WebP**: 85%
- **Ancho máximo**: 1920px
- **Formato**: WebP + Original
- **Lazy loading threshold**: 100px

### Tamaños Responsive
- **Thumbnail**: 150px
- **Small**: 300px
- **Medium**: 600px
- **Large**: 1200px
- **XLarge**: 1920px

## 🎨 Estilos CSS

### Clases Disponibles
```css
.optimized-image-container    /* Contenedor principal */
.optimized-image             /* Imagen optimizada */
.image-fallback              /* Fallback para errores */
.aspect-square               /* Aspect ratio 1:1 */
.aspect-video                /* Aspect ratio 16:9 */
.aspect-photo                /* Aspect ratio 4:3 */
.skeleton                    /* Loading skeleton */
```

### Modo Oscuro
```css
@media (prefers-color-scheme: dark) {
  .image-fallback {
    background-color: #374151;
    color: #d1d5db;
  }
}
```

### Reducción de Movimiento
```css
@media (prefers-reduced-motion: reduce) {
  .optimized-image {
    transition: none;
  }
}
```

## 📱 Optimización Móvil

### Breakpoints
- **Mobile**: ≤ 768px
- **Tablet**: ≤ 1024px
- **Desktop**: ≤ 1920px
- **XLarge**: > 1920px

### Optimizaciones Específicas
- Imágenes más pequeñas en móvil
- Lazy loading más agresivo
- Placeholders simplificados
- Compresión aumentada

## 🔍 Monitoreo y Métricas

### Métricas a Seguir
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FID (First Input Delay)**: < 100ms
- **Tamaño total de imágenes**: < 1MB

### Herramientas de Análisis
- Google PageSpeed Insights
- Lighthouse Performance
- WebPageTest
- GTmetrix

## 🚨 Mejores Prácticas

### 1. Selección de Imágenes
- Usar formatos apropiados (WebP para fotos, PNG para logos)
- Optimizar antes de subir
- Considerar el contexto de uso

### 2. Tamaños de Archivo
- **Thumbnails**: < 50KB
- **Imágenes pequeñas**: < 200KB
- **Imágenes medianas**: < 500KB
- **Imágenes grandes**: < 1MB

### 3. Atributos Alt
- Descriptivos y relevantes
- Incluir palabras clave cuando sea apropiado
- No repetir información del contexto

### 4. Lazy Loading
- No usar en imágenes above the fold
- Configurar threshold apropiado
- Proporcionar placeholders

## 🔧 Configuración Avanzada

### Personalizar Configuración
```javascript
// src/utils/imageConfig.js
export const imageConfig = {
  lazyLoading: {
    threshold: 100,
    effect: 'blur',
    placeholder: true
  },
  webp: {
    enabled: true,
    quality: 85,
    maxWidth: 1920
  },
  compression: {
    quality: 85,
    maxWidth: 1920,
    progressive: true
  }
};
```

### Imágenes Críticas
```javascript
criticalImages: [
  '/src/assets/imagenes/Logo-Gallegos-1536x552.png',
  '/src/assets/imagenes/logo trielht.png',
  '/src/assets/imagenes/logodorado.png'
]
```

## 🐛 Solución de Problemas

### Imágenes No Se Cargan
1. Verificar rutas de archivos
2. Comprobar formato de imagen
3. Revisar configuración de WebP
4. Verificar lazy loading threshold

### WebP No Funciona
1. Verificar soporte del navegador
2. Comprobar que los archivos WebP existen
3. Revisar configuración de fallback
4. Verificar headers del servidor

### Lazy Loading No Funciona
1. Verificar threshold configurado
2. Comprobar Intersection Observer
3. Revisar CSS de placeholder
4. Verificar JavaScript habilitado

## 📈 Próximos Pasos

### Optimizaciones Futuras
1. **AVIF**: Implementar formato AVIF para mejor compresión
2. **Service Worker**: Cache de imágenes optimizado
3. **CDN**: Implementar CDN para imágenes
4. **Progressive JPEG**: Para imágenes grandes
5. **Art Direction**: Diferentes imágenes por dispositivo

### Monitoreo Continuo
1. **Analytics**: Seguimiento de métricas de rendimiento
2. **A/B Testing**: Comparar diferentes configuraciones
3. **User Feedback**: Recopilar feedback de usuarios
4. **Performance Budget**: Mantener límites de tamaño

## 📞 Soporte

Para dudas sobre optimización de imágenes:
- Email: administracion@cyrgama.com
- WhatsApp: +57 301 5145137

---

**Última actualización:** Enero 2024
**Versión:** 1.0 