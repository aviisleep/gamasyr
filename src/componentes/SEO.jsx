import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  locale = 'es_CO',
  alternateLocales = ['en_US'],
  structuredData = null 
}) => {
  const siteName = 'Camiones y Remolques Gama';
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://www.cyrgama.com';
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const defaultImage = `${baseUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || 'Descripción por defecto'} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Camiones y Remolques Gama" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="CO" />
      <meta name="geo.country" content="Colombia" />
      <meta name="geo.placename" content="Cota, Cundinamarca" />
      <meta name="geo.position" content="4.7475151;-74.1393476" />
      <meta name="ICBM" content="4.7475151, -74.1393476" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {alternateLocales.map(locale => (
        <meta key={locale} property="og:locale:alternate" content={locale} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Hreflang para internacionalización */}
      <link rel="alternate" hrefLang="es-CO" href={fullUrl} />
      <link rel="alternate" hrefLang="en-US" href={`${baseUrl}/en${url}`} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Meta tags adicionales para Colombia */}
      <meta name="distribution" content="Colombia" />
      <meta name="coverage" content="Colombia" />
      <meta name="target" content="Colombia" />
      
      {/* Información de contacto para Google My Business */}
      <meta name="business:contact_data:street_address" content="Autopista Medellin K.M. 3 T.T.C. Oficina C60" />
      <meta name="business:contact_data:locality" content="Cota" />
      <meta name="business:contact_data:region" content="Cundinamarca" />
      <meta name="business:contact_data:postal_code" content="250010" />
      <meta name="business:contact_data:country_name" content="Colombia" />
      <meta name="business:contact_data:phone_number" content="+57-301-5145137" />
      <meta name="business:contact_data:email" content="administracion@cyrgama.com" />
      <meta name="business:contact_data:hours" content="Lunes a Viernes: 7:30 AM - 5:00 PM, Sábados: 8:00 AM - 12:30 PM" />
    </Helmet>
  );
};

export { SEO }; 