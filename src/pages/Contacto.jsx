import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import Menu from "../componentes/Menu";
import SocialBotones from "../componentes/SocialBotones";
import { SEO } from "../componentes/SEO";
import { getLocalBusinessStructuredData } from "../utils/structuredData";
import { useT } from '../hooks/useT';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const structuredData = getLocalBusinessStructuredData();
  const t = useT();

  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = "El nombre debe tener al menos 2 caracteres";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor ingresa un email válido";
    }

    // Validar teléfono (opcional pero si se ingresa debe ser válido)
    if (formData.telefono.trim()) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,}$/;
      if (!phoneRegex.test(formData.telefono)) {
        newErrors.telefono = "Por favor ingresa un número de teléfono válido";
      }
    }

    // Validar mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_id", // Reemplazar con tu service ID
        "template_id", // Reemplazar con tu template ID
        {
          from_name: formData.nombre,
          from_email: formData.email,
          from_phone: formData.telefono,
          message: formData.mensaje,
        },
        "user_id" // Reemplazar con tu user ID
      );

      setSubmitStatus("success");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={t('contacto') + ' - Gama SYR'}
        description={t('descripcionContacto')}
        keywords="contacto gama syr, camiones colombia contacto, remolques colombia, repuestos camiones cota, mantenimiento camiones cundinamarca, gallegos trailers contacto"
        url="/contacto"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Menu />
        <SocialBotones />
        <main className="container px-4 py-12 mx-auto max-w-6xl">
          {/* Header Section */}
          <section className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
              {t('contactoTitulo')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('contactoDescripcion')}
            </p>
          </section>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <section aria-label="Información de contacto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
                <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
                  {t('infoContacto')}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <FaMapMarkerAlt className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Dirección Administrativa</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('direccionAdministrativaTexto')}
                      </p>
                      <h3 className="mt-4 font-semibold text-gray-800 dark:text-white">Dirección de Servicio</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {t('direccionServicioTexto')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <FaPhone className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Teléfonos</h3>
                      <div className="space-y-1">
                        <a 
                          href="tel:+573015145137" 
                          className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          aria-label="Llamar al número +57 301 5145137"
                        >
                          +57 301 5145137
                        </a>
                        <a 
                          href="tel:+573008065644" 
                          className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          aria-label="Llamar al número +57 300 8065644"
                        >
                          +57 300 8065644
                        </a>
                        <a 
                          href="tel:+573008065603" 
                          className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          aria-label="Llamar al número +57 300 8065603"
                        >
                          +57 300 8065603
                        </a>
                        <a 
                          href="tel:+573008067460" 
                          className="block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          aria-label="Llamar al número +57 300 8067460"
                        >
                          +57 300 8067460
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <FaEnvelope className="w-6 h-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                      <a 
                        href="mailto:administracion@cyrgama.com" 
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        aria-label="Enviar email a administracion@cyrgama.com"
                      >
                        administracion@cyrgama.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <FaWhatsapp className="w-6 h-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">WhatsApp</h3>
                      <div className="space-y-1">
                        <a 
                          href="https://wa.me/573015145137?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                          aria-label="Contactar por WhatsApp al +57 301 5145137"
                        >
                          +57 301 5145137
                        </a>
                        <a 
                          href="https://wa.me/573008065644?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                          aria-label="Contactar por WhatsApp al +57 300 8065644"
                        >
                          +57 300 8065644
                        </a>
                        <a 
                          href="https://wa.me/573008065603?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                          aria-label="Contactar por WhatsApp al +57 300 8065603"
                        >
                          +57 300 8065603
                        </a>
                        <a 
                          href="https://wa.me/573008067460?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                          aria-label="Contactar por WhatsApp al +57 300 8067460"
                        >
                          +57 300 8067460
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Horarios de Atención */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                    {t('horariosAtencion')}
                  </h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p><strong>{t('lunesViernes')}</strong> {t('horarioLV')}</p>
                    <p><strong>{t('sabados')}</strong> {t('horarioSab')}</p>
                    <p><strong>{t('domingos')}</strong> {t('horarioDom')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section aria-label="Formulario de contacto">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
                <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
                  {t('envianosMensaje')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="nombre" className="block mb-2 font-medium text-gray-700 dark:text-white required">
                      {t('nombreCompleto')}
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.nombre ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                      placeholder={t('placeholderNombre')}
                      aria-describedby={errors.nombre ? "nombre-error" : undefined}
                      aria-invalid={errors.nombre ? "true" : "false"}
                    />
                    {errors.nombre && (
                      <p id="nombre-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-white required">
                      {t('emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                      placeholder={t('placeholderEmail')}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block mb-2 font-medium text-gray-700 dark:text-white">
                      {t('telefonoLabel')}
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.telefono ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                      placeholder={t('placeholderTelefono')}
                      aria-describedby={errors.telefono ? "telefono-error" : undefined}
                      aria-invalid={errors.telefono ? "true" : "false"}
                    />
                    {errors.telefono && (
                      <p id="telefono-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                        {errors.telefono}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block mb-2 font-medium text-gray-700 dark:text-white required">
                      {t('mensajeLabel')}
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-vertical ${
                        errors.mensaje ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                      placeholder={t('placeholderMensaje')}
                      aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                      aria-invalid={errors.mensaje ? "true" : "false"}
                    />
                    {errors.mensaje && (
                      <p id="mensaje-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                        {errors.mensaje}
                      </p>
                    )}
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-lg" role="alert" aria-live="polite">
                      ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg" role="alert" aria-live="polite">
                      Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-describedby="submit-status"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* Map Section */}
          <section className="mt-12" aria-label="Ubicación en mapa">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
                {t('nuestraUbicacion')}
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1234567890123!2d-74.1393476!3d4.7475151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8399b3b13689%3A0xdf9892145133dd72!2sCamiones%20y%20Remolques%20GAMA!5e0!3m2!1ses!2sco!4v1703123456789"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Gama SYR - Camiones y Remolques en Cota, Cundinamarca"
                  aria-label="Mapa mostrando la ubicación de Gama SYR - Camiones y Remolques en Cota, Cundinamarca"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contacto;
