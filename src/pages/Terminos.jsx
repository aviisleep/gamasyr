import { motion } from "framer-motion";
import Menu from "../componentes/Menu";

const Terminos = () => {
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
            Términos y Condiciones
          </h1>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso. 
                Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al sitio.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">2. Uso del Sitio</h2>
              <p>
                Este sitio web está destinado a proporcionar información sobre nuestros servicios y productos. 
                Usted acepta utilizar el sitio solo para fines legales y de una manera que no infrinja los derechos de otros.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">3. Propiedad Intelectual</h2>
              <p>
                Todo el contenido presente en este sitio web, incluyendo pero no limitado a textos, gráficos, 
                logotipos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad 
                de Camiones y Remolques Gama o sus proveedores de contenido y está protegido por las leyes de 
                propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">4. Limitación de Responsabilidad</h2>
              <p>
                No seremos responsables por ningún daño que pueda surgir del uso o la imposibilidad de usar 
                nuestro sitio web, incluyendo pero no limitado a daños directos, indirectos, incidentales, 
                punitivos y consecuentes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">5. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">6. Ley Aplicable</h2>
              <p>
                Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Colombia, 
                y cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva 
                de los tribunales de Colombia.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">7. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre estos términos y condiciones, por favor contáctenos a través de 
                nuestra página de contacto o en la siguiente dirección:
              </p>
              <p className="mt-2">
                Camiones y Remolques Gama<br />
                Autopista Medellin K.M. 3 T.T.C. Oficina C60, Cota<br />
                Teléfono: [Número de teléfono]<br />
                Email: [Correo electrónico]
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

export default Terminos; 