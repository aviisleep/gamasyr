import { motion } from "framer-motion";
import Menu from "../componentes/Menu";
import { useT } from '../hooks/useT';

const Terminos = () => {
  const t = useT();

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
            {t('terminosCondiciones')}
          </h1>

          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('terminos_1_titulo')}</h2>
              <p>{t('terminos_1_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('terminos_2_titulo')}</h2>
              <p>{t('terminos_2_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('terminos_3_titulo')}</h2>
              <p>{t('terminos_3_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('terminos_4_titulo')}</h2>
              <p>{t('terminos_4_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('terminos_5_titulo')}</h2>
              <p>{t('terminos_5_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('terminos_6_titulo')}</h2>
              <p>{t('terminos_6_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('terminos_7_titulo')}</h2>
              <p>{t('terminos_7_texto')}</p>
              <p className="mt-2 whitespace-pre-line">{t('terminos_7_direccion')}</p>
            </section>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>{t('terminos_actualizacion')}</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Terminos; 