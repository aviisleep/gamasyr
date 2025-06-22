// Service Worker para Gama SYR
// Cache crítico para mejorar rendimiento

const CACHE_NAME = 'gamasyr-v1.0.1';
const STATIC_CACHE = 'gamasyr-static-v1.0.1';
const IMAGE_CACHE = 'gamasyr-images-v1.0.1';

// Recursos críticos para cachear inmediatamente
const CRITICAL_RESOURCES = [
  '/',
  '/index.html'
];

// Recursos estáticos importantes
const STATIC_RESOURCES = [
  '/manifest.json',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml'
];

// Función para cachear recursos con manejo de errores
async function cacheResources(cache, resources) {
  const results = await Promise.allSettled(
    resources.map(resource => cache.add(resource))
  );
  
  const failed = results.filter(result => result.status === 'rejected');
  if (failed.length > 0) {
    console.warn('Algunos recursos no se pudieron cachear:', failed.map(f => f.reason));
  }
  
  return results;
}

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker instalando...');
  
  event.waitUntil(
    Promise.all([
      // Cachear recursos críticos
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Cacheando recursos críticos...');
        return cacheResources(cache, CRITICAL_RESOURCES);
      }),
      
      // Cachear recursos estáticos
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('Cacheando recursos estáticos...');
        return cacheResources(cache, STATIC_RESOURCES);
      })
    ])
  );
  
  // Activar inmediatamente
  self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker activando...');
  
  event.waitUntil(
    Promise.all([
      // Limpiar caches antiguos
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && 
                cacheName !== STATIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('Eliminando cache antiguo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Tomar control inmediatamente
      self.clients.claim()
    ])
  );
});

// Interceptar requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Solo manejar requests del mismo origen
  if (url.origin !== location.origin) {
    return;
  }
  
  // Estrategia para diferentes tipos de recursos
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(handleStaticRequest(request));
  } else if (request.destination === 'document') {
    event.respondWith(handleDocumentRequest(request));
  } else {
    event.respondWith(handleApiRequest(request));
  }
});

// Manejar requests de imágenes
async function handleImageRequest(request) {
  const cache = await caches.open(IMAGE_CACHE);
  
  try {
    // Intentar obtener de cache primero
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Si no está en cache, obtener de red
    const networkResponse = await fetch(request);
    
    // Cachear la imagen si la respuesta es exitosa
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Error cargando imagen:', error);
    
    // Retornar imagen placeholder si hay error
    return new Response(
      `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#f3f4f6"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial" font-size="16">
          Imagen no disponible
        </text>
      </svg>`,
      {
        headers: { 'Content-Type': 'image/svg+xml' }
      }
    );
  }
}

// Manejar requests estáticos (JS, CSS)
async function handleStaticRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  
  try {
    // Intentar obtener de cache primero
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Si no está en cache, obtener de red
    const networkResponse = await fetch(request);
    
    // Cachear si la respuesta es exitosa
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Error cargando recurso estático:', error);
    throw error;
  }
}

// Manejar requests de documentos (HTML)
async function handleDocumentRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // Intentar obtener de red primero para documentos
    const networkResponse = await fetch(request);
    
    // Cachear si la respuesta es exitosa
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Error cargando documento:', error);
    
    // Intentar obtener de cache como fallback
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Si no hay cache, mostrar página offline
    return cache.match('/offline.html') || new Response(
      `<html>
        <head>
          <title>Gama SYR - Sin conexión</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
          <h1>Sin conexión</h1>
          <p>No se puede acceder a esta página sin conexión a internet.</p>
          <button onclick="window.location.reload()">Reintentar</button>
        </body>
      </html>`,
      {
        headers: { 'Content-Type': 'text/html' }
      }
    );
  }
}

// Manejar requests de API
async function handleApiRequest(request) {
  try {
    // Para APIs, siempre intentar red primero
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (error) {
    console.log('Error en request de API:', error);
    throw error;
  }
}

// Manejar mensajes del cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Manejar errores
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

// Manejar rechazos de promesas no manejados
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
  // Prevenir que el error se propague
  event.preventDefault();
}); 