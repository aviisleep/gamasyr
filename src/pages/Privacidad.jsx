import { motion } from "framer-motion";
import Menu from "../componentes/Menu";

const Privacidad = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />
      
      <main className="container px-4 py-12 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Política de Privacidad
          </h1>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">1. Información General</h2>
              <p>
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, 
                de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, 
                le informamos que el Sitio Web y el portal de Internet www.gamasyr.com (en adelante, el "Sitio Web") 
                es propiedad de Gama SYR, con domicilio en Autopista Medellin K.M. 3 T.T.C. Oficina C60, Cota.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">2. Recopilación de Información</h2>
              <p>
                Recopilamos información cuando usted se registra en nuestro sitio, realiza un pedido o introduce 
                información en nuestro sitio. La información recopilada incluye:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Nombre</li>
                <li>Información de contacto</li>
                <li>Información de la empresa</li>
                <li>Información de pago</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">3. Uso de la Información</h2>
              <p>
                La información que recopilamos se utiliza para:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Personalizar su experiencia</li>
                <li>Mejorar nuestro sitio web</li>
                <li>Mejorar el servicio al cliente</li>
                <li>Procesar transacciones</li>
                <li>Enviar correos electrónicos periódicos</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">4. Protección de la Información</h2>
              <p>
                Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. 
                Utilizamos un servidor seguro. Toda la información sensible / crédito suministrada se transmite vía 
                Secure Socket Layer (SSL) y luego se encripta en nuestra base de datos para que solo sea accesible 
                por aquellos autorizados con derechos de acceso especiales a nuestros sistemas.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">5. Cookies</h2>
              <p>
                Nuestro sitio utiliza cookies. Las cookies son pequeños archivos que un sitio o su proveedor de servicios 
                transfiere al disco duro de su computadora a través de su navegador web (si lo permite) que permite que 
                los sistemas del sitio o proveedor de servicios reconozcan su navegador y capturen y recuerden cierta información.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">6. Divulgación a Terceros</h2>
              <p>
                No vendemos, comerciamos o transferimos de otra manera su información de identificación personal a terceros. 
                Esto no incluye terceros de confianza que nos ayudan a operar nuestro sitio web o conducir nuestro negocio, 
                siempre y cuando esas partes acuerden mantener esta información confidencial.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">7. Sus Derechos</h2>
              <p>
                De acuerdo con el Reglamento General de Protección de Datos (RGPD), usted tiene los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Derecho de acceso a sus datos personales</li>
                <li>Derecho de rectificación de datos inexactos</li>
                <li>Derecho de supresión cuando los datos ya no sean necesarios</li>
                <li>Derecho de oposición al tratamiento de sus datos</li>
                <li>Derecho de limitación del tratamiento</li>
                <li>Derecho a la portabilidad de los datos</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">8. Cambios en la Política de Privacidad</h2>
              <p>
                Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. 
                Los cambios y aclaraciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">9. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos a través de:
              </p>
              <p className="mt-2">
                Camiones y Remolques Gama<br />
                Autopista Medellin K.M. 3 T.T.C. Oficina C60, Cota<br />
                Teléfono: [Número de teléfono]<br />
                Email: [Correo electrónico]
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">10. Consentimiento</h2>
              <p>
                Al utilizar nuestro sitio, usted acepta nuestra política de privacidad. Si no está de acuerdo con esta política, 
                por favor no utilice nuestro sitio. Su uso continuado del sitio después de la publicación de cambios en esta 
                política será considerado como su aceptación de dichos cambios.
              </p>
            </section>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Última actualización: {new Date().toLocaleDateString()}</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Privacidad; 