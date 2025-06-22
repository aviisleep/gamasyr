import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './componentes/SEO';
import Accessibility from './componentes/Accessibility';
import ScrollToTop from "./componentes/ScrollToTop";
import Navbar from "./componentes/Menu";
import Footer from "./componentes/footer/Footer";
import ConsentBanner from "./componentes/ConsentBanner";
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy loading de páginas para mejor performance
const HomeLazy = lazy(() => import('./pages/Home'));
const GallegosLazy = lazy(() => import('./pages/Gallegos'));
const ContactoLazy = lazy(() => import('./pages/Contacto'));
const TrielhtLazy = lazy(() => import('./pages/Trielht'));
const PostVentaLazy = lazy(() => import('./pages/PostVenta'));
const TerminosLazy = lazy(() => import('./pages/Terminos'));
const PrivacidadLazy = lazy(() => import('./pages/Privacidad'));

// Layout component con navbar y footer
const Layout = () => {
  return (
    <div>
      {/* Enlace para saltar al contenido principal */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      
      {/* Navbar siempre visible */}
      <Navbar />
      <ScrollToTop />
      
      {/* Contenido principal */}
      <main id="main-content" className="pt-24">
        <Outlet />
      </main>
      
      {/* Footer siempre visible */}
      <Footer />
      <ConsentBanner />
      <Accessibility />
    </div>
  );
};

// Loading component para Suspense
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Cargando Gama SYR...</p>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HelmetProvider>
          <Router>
            <div className="App">
              {/* SEO global */}
              <SEO
                title="Gama SYR - Camiones, Remolques y Servicios en Colombia"
                description="Empresa líder en venta de camiones, remolques y servicios de transporte en Colombia. Ubicados en Cota, Cundinamarca."
                keywords="camiones, remolques, transporte, colombia, cota, cundinamarca, gallegos"
                url="/"
              />
              {/* Performance Monitor (solo en desarrollo) */}
              {/* <PerformanceMonitor /> */}
              {/* Rutas con lazy loading y layout */}
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Ruta con el layout principal */}
                  <Route path="/" element={<Layout />}>
                    <Route index element={<HomeLazy />} />
                    <Route path="contacto" element={<ContactoLazy />} />
                    <Route path="gallegos" element={<GallegosLazy />} />
                    <Route path="trielht" element={<TrielhtLazy />} />
                    <Route path="postVenta" element={<PostVentaLazy />} />
                    <Route path="terminos" element={<TerminosLazy />} />
                    <Route path="privacidad" element={<PrivacidadLazy />} />
                  </Route>
                </Routes>
              </Suspense>
            </div>
          </Router>
        </HelmetProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
