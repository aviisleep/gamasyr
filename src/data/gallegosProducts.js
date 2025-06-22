import { productImages } from "../utils/productImagesGallegos";

export const gallegosProducts = [
  {
    id: 1,
    title: "Van Seco",
    subtitle: "Semiremolque Van Seco Composite - Gallegos Trailers",
    categories: ["carga seca", "plataformas"],
    images: productImages.vanSeco || [],
    specs: {
      medidas: "medidas_vanseco",
      construcción: "construccion_vanseco",
      peso: "peso_vanseco",
      capacidad: "capacidad_vanseco",
      aplicación: "aplicacion_vanseco"
    }
  },
  {
    id: 2,
    title: "Van Refrigerado",
    subtitle: "Semirremolque Van Refrigerado — Gallegos Trailers",
    categories: ["carga refrigerada", "furgones"],
    images: productImages.vanRefrigerado || [],
    specs: {
      eficiencia: "eficiencia_vanrefrigerado",
      opcionales: "opcionales_vanrefrigerado",
      accesos: "accesos_vanrefrigerado",
      multitemperatura: "multitemperatura_vanrefrigerado",
      especializado: "especializado_vanrefrigerado"
    }
  },
  {
    id: 3,
    title: "Tanque de Asfalto",
    subtitle: "Semirremolque Tanque para Asfalto — Gallegos Trailers",
    categories: ["carga liquida"],
    images: productImages.tanqueasfalto || [],
    specs: {
      material: "material_tanqueasfalto",
      descargue: "descargue_tanqueasfalto",
      aislamiento: "aislamiento_tanqueasfalto",
      diseño: "diseno_tanqueasfalto"
    }
  },
  {
    id: 4,
    title: "Grado Alimenticio",
    subtitle: "Semirremolque Tanque Grado Alimenticio — Gallegos Trailers",
    categories: ["carga liquida", "equipos sobre chasis"],
    images: productImages.tanqueleche || [],
    specs: {
      capacidades: "capacidades_gradoalimenticio",
      peso: "peso_gradoalimenticio",
      válvulas: "valvulas_gradoalimenticio",
      sistemas: "sistemas_gradoalimenticio",
      sistema_limpieza: "sistema_limpieza_gradoalimenticio",
      aplicación: "aplicacion_gradoalimenticio"
    }
  },
  {
    id: 5,
    title: "Tanques Especiales",
    subtitle: "Tanque Especial — Gallegos Trailers",
    categories: ["carga liquida"],
    images: productImages.tanqueespeciales || [],
    specs: {
      descripción: "descripcion_tanqueespeciales",
      capacidad: "capacidad_tanqueespeciales",
      ejes: "ejes_tanqueespeciales"
    }
  },
  {
    id: 6,
    title: "Tanques Refinados",
    subtitle: "Tanque Refinado — Gallegos Trailers",
    categories: ["carga liquida"],
    images: productImages.tanquerefinados || [],
    specs: {
      descripción: "descripcion_tanquerefinados",
      capacidad: "capacidad_tanquerefinados"
    }
  },
  {
    id: 7,
    title: "Botelleros",
    subtitle: "Carrocería para Transporte de Bebidas — Gallegos Trailers",
    categories: ["transporte de bebida"],
    images: productImages.botellero || [],
    specs: {
      materiales: "materiales_botelleros",
      diseño: "diseno_botelleros",
      capacidad: "capacidad_botelleros",
      ventajas: "ventajas_botelleros"
    }
  },
  {
    id: 8,
    title: "Cama Baja",
    subtitle: "Semirremolque Camabaja Cuello Fijo — Gallegos Trailers",
    categories: ["transportes especiales"],
    images: productImages.camabaja || [],
    specs: {
      estructura: "estructura_camabaja",
      disponible: "disponible_camabaja",
      ideal: "ideal_camabaja"
    }
  },
  {
    id: 9,
    title: "Dollys",
    subtitle: "Dolly Tipo A - Gallegos Trailers",
    categories: ["transportes especiales"],
    images: productImages.dollys || [],
    specs: {
      descripción: "descripcion_dollys"
    }
  },
  {
    id: 10,
    title: "Furgon Composite",
    subtitle: "Furgón sobre Chasis Composite - Gallegos Trailers",
    categories: ["equipos sobre chasis", "furgones"],
    images: productImages.furgones || [],
    specs: {
      descripción: "descripcion_furgoncomposite"
    }
  },
  {
    id: 11,
    title: "Plataformas",
    subtitle: "Plataformas - Gallegos Trailers",
    categories: ["carga seca", "plataformas"],
    images: productImages.plataformas || [],
    specs: {
      descripción: "descripcion_plataformas",
      disponible: "disponible_plataformas",
      suspensión: "suspension_plataformas"
    }
  },
  {
    id: 12,
    title: "Sider",
    subtitle: "Semirremolque Sider - Gallegos Trailers",
    categories: ["carga seca", "transporte de bebida"],
    images: productImages.siders || [],
    specs: {
      descripción: "descripcion_sider"
    }
  },
  {
    id: 13,
    title: "Sider Tarp",
    subtitle: "Semirremolque Tarp All - Gallegos Trailers",
    categories: ["carga seca", "transporte de bebida"],
    images: productImages.siderstarp || [],
    specs: {
      descripción: "descripcion_sidertarp"
    }
  },
  {
    id: 14,
    title: "Silos",
    subtitle: "Silos - Gallegos Trailers",
    categories: ["carga a granel"],
    images: productImages.silos || [],
    specs: {
      descripción: "descripcion_silos"
    }
  },
  {
    id: 15,
    title: "Volco HYBRID YACH",
    subtitle: "Volco HYBRID YACH - Gallegos Trailers",
    categories: ["carga a granel", "mineria"],
    images: productImages.volcohibrido || [],
    specs: {
      descripción: "descripcion_volcohibridoyach"
    }
  }
];

// Categorías disponibles
export const categories = [
  { id: "all", name: "Todos los Productos", count: gallegosProducts.length },
  { id: "carga seca", name: "Carga Seca", count: gallegosProducts.filter(p => p.categories.includes("carga seca")).length },
  { id: "carga liquida", name: "Carga Líquida", count: gallegosProducts.filter(p => p.categories.includes("carga liquida")).length },
  { id: "carga a granel", name: "Carga a Granel", count: gallegosProducts.filter(p => p.categories.includes("carga a granel")).length },
  { id: "transportes especiales", name: "Transportes Especiales", count: gallegosProducts.filter(p => p.categories.includes("transportes especiales")).length },
  { id: "mineria", name: "Minería", count: gallegosProducts.filter(p => p.categories.includes("mineria")).length },
  { id: "equipos sobre chasis", name: "Equipos sobre Chasis", count: gallegosProducts.filter(p => p.categories.includes("equipos sobre chasis")).length },
  { id: "transporte de bebida", name: "Transporte de Bebidas", count: gallegosProducts.filter(p => p.categories.includes("transporte de bebida")).length },
  { id: "carga refrigerada", name: "Carga Refrigerada", count: gallegosProducts.filter(p => p.categories.includes("carga refrigerada")).length },
  { id: "furgones", name: "Furgones", count: gallegosProducts.filter(p => p.categories.includes("furgones")).length },
  { id: "plataformas", name: "Plataformas", count: gallegosProducts.filter(p => p.categories.includes("plataformas")).length }
]; 