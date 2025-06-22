export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gama SYR - Camiones y Remolques",
  "alternateName": "Gama Carrocería & Remolques",
  "url": "https://gamasyr.com",
  "logo": "https://gamasyr.com/logo.png",
  "description": "Empresa líder en la venta de camiones, remolques, repuestos y servicios de mantenimiento en Colombia. Especialistas en equipos Gallegos y Trielht.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Autopista Medellin K.M. 3 T.T.C. Oficina C60",
    "addressLocality": "Cota",
    "addressRegion": "Cundinamarca",
    "postalCode": "250010",
    "addressCountry": "CO"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+57-301-5145137",
      "contactType": "customer service",
      "areaServed": "CO",
      "availableLanguage": ["Spanish", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+57-300-8065644",
      "contactType": "customer service",
      "areaServed": "CO",
      "availableLanguage": ["Spanish", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+57-300-8065603",
      "contactType": "customer service",
      "areaServed": "CO",
      "availableLanguage": ["Spanish", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+57-300-8067460",
      "contactType": "customer service",
      "areaServed": "CO",
      "availableLanguage": ["Spanish", "English"]
    }
  ],
  "email": "administracion@cyrgama.com",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100089640880033",
    "https://www.instagram.com/cyr_gama",
    "https://www.linkedin.com/company/camiones-remolques-gama/"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Colombia"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 4.7475151,
      "longitude": -74.1393476
    },
    "geoRadius": "500000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Catálogo de Productos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Remolques Gallegos",
          "description": "Remolques de alta calidad para transporte de carga"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Servicios de Postventa",
          "description": "Mantenimiento y repuestos para equipos"
        }
      }
    ]
  }
});

export const getLocalBusinessStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gama SYR - Camiones y Remolques",
  "image": "https://gamasyr.com/logo.png",
  "description": "Venta de camiones, remolques, repuestos y servicios de mantenimiento en Cota, Cundinamarca, Colombia.",
  "url": "https://gamasyr.com",
  "telephone": "+57-301-5145137",
  "email": "administracion@cyrgama.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Autopista Medellin K.M. 3 T.T.C. Oficina C60",
    "addressLocality": "Cota",
    "addressRegion": "Cundinamarca",
    "postalCode": "250010",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 4.7475151,
    "longitude": -74.1393476
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:30",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:30"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "COP, USD",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "areaServed": {
    "@type": "Country",
    "name": "Colombia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Productos y Servicios",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Venta de Remolques",
          "description": "Remolques Gallegos y Trielht"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Servicios de Mantenimiento",
          "description": "Mantenimiento preventivo y correctivo"
        }
      }
    ]
  }
});

export const getBreadcrumbStructuredData = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getProductStructuredData = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.Titulo,
  "description": product.Descripción || product.Aplicación || product.description,
  "brand": {
    "@type": "Brand",
    "name": "Gallegos Trailers"
  },
  "category": product.categories ? product.categories[0] : "Remolques",
  "image": product.images && product.images.length > 0 ? product.images[0] : null,
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "COP",
    "seller": {
      "@type": "Organization",
      "name": "Gama SYR"
    }
  }
}); 