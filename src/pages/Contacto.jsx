import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Contacto = () => {
  const [formData, setFormData] = useState({
    empresa: "",
    nombre: "",
    telefono: "",
    correo: "",
    pais: "",
    estado: "",
    motivo: "",
    producto: "",
    mensaje: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      empresa: formData.empresa,
      nombre: formData.nombre,
      telefono: formData.telefono,
      correo: formData.correo,
      pais: formData.pais,
      estado: formData.estado,
      motivo: formData.motivo,
      producto: formData.producto,
      mensaje: formData.mensaje,
    };

    emailjs.send("service_id", "template_id", templateParams, "user_id").then(
      () => {
        setSuccessMessage("Su correo fue enviado exitosamente.");
        setFormData({
          empresa: "",
          nombre: "",
          telefono: "",
          correo: "",
          pais: "",
          estado: "",
          motivo: "",
          producto: "",
          mensaje: "",
        });
      },
      (error) => {
        console.error("Error al enviar el correo:", error);
        setSuccessMessage("Hubo un problema al enviar el mensaje.");
      }
    );
  };

  return (
    <div className="flex items-center justify-center py-10 text-white bg-gray-900">
      <div className="container max-w-4xl p-6 mx-auto bg-gray-800 rounded-lg">
        <h2 className="mb-4 text-2xl font-bold text-center">Cotiza Ahora</h2>
        <p className="text-center">
          Contáctanos por el medio que mejor sea para ti y recibe la atención
          inmediata de un asesor.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-2">
          {/* Información de contacto */}
          <div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-2 text-xl" />
              <div>
                <h3 className="font-semibold">Correo Electrónico</h3>
                <p>correo@empresa.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2 text-xl" />
              <div>
                <h3 className="font-semibold">Ubicación</h3>
                <p>Dirección de la empresa</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaWhatsapp className="mr-2 text-xl" />
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p>+52 123 456 7890</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <FaInstagram className="text-2xl cursor-pointer" />
              <FaFacebook className="text-2xl cursor-pointer" />
              <FaLinkedin className="text-2xl cursor-pointer" />
            </div>
          </div>

          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Empresa"
                className="w-full p-2 rounded"
              />
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                className="w-full p-2 rounded"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="w-full p-2 rounded"
              />
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Correo Electrónico"
                className="w-full p-2 rounded"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                placeholder="País"
                className="w-full p-2 rounded"
              />
              <input
                type="text"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                placeholder="Estado"
                className="w-full p-2 rounded"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 text-gray-900 sm:grid-cols-2">
              <select
                name="motivo"
                value={formData.motivo}
                onChange={handleChange}
                placeholder="Motivo"
                className="w-full p-2 rounded"
              >
                <option value="">Motivo de Contacto</option>
                <option value="Ventas de unidades nuevas">
                  Ventas de unidades nuevas
                </option>
                <option value="Servicios">Servicios</option>
                <option value="Garantias">Garantías</option>
                <option value="RH">RH</option>
              </select>
              <select
                name="producto"
                value={formData.producto}
                onChange={handleChange}
                className="w-full p-2 rounded"
              >
                <option value="">Productos de Interés</option>
                <option value="Cajas secas">Cajas secas</option>
                <option value="Refrigeradas">Refrigeradas</option>
                <option value="Tanques">Tanques</option>
                <option value="Volteos">Volteos</option>
                <option value="Tolvas">Tolvas</option>
                <option value="Plataformas">Plataformas</option>
                <option value="Encortinados">Encortinados</option>
                <option value="Silos">Silos</option>
                <option value="Chasis">Chasis</option>
                <option value="Equipos Sobre Chasis">
                  Equipos Sobre Chasis
                </option>
                <option value="Camas bajas">Camas bajas</option>
                <option value="Dollys">Dollys</option>
              </select>
            </div>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Mensaje"
              className="w-full p-2 rounded"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700"
            >
              Enviar Mensaje
            </button>
            {successMessage && (
              <p className="mt-4 text-green-500">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
