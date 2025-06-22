import { motion } from "framer-motion";
import Menu from "../componentes/Menu";
import { useT } from '../hooks/useT';

const Privacidad = () => {
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
            {t('avisoPrivacidad')}
          </h1>

          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_1_titulo')}</h2>
              <p>{t('privacidad_1_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_2_titulo')}</h2>
              <p>{t('privacidad_2_texto')}</p>
              <ul className="list-disc pl-6 mt-2">
                <li>{t('privacidad_2_lista_1')}</li>
                <li>{t('privacidad_2_lista_2')}</li>
                <li>{t('privacidad_2_lista_3')}</li>
                <li>{t('privacidad_2_lista_4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_3_titulo')}</h2>
              <p>{t('privacidad_3_texto')}</p>
              <ul className="list-disc pl-6 mt-2">
                <li>{t('privacidad_3_lista_1')}</li>
                <li>{t('privacidad_3_lista_2')}</li>
                <li>{t('privacidad_3_lista_3')}</li>
                <li>{t('privacidad_3_lista_4')}</li>
                <li>{t('privacidad_3_lista_5')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_4_titulo')}</h2>
              <p>{t('privacidad_4_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_5_titulo')}</h2>
              <p>{t('privacidad_5_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_6_titulo')}</h2>
              <p>{t('privacidad_6_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_7_titulo')}</h2>
              <p>{t('privacidad_7_texto')}</p>
              <ul className="list-disc pl-6 mt-2">
                <li>{t('privacidad_7_lista_1')}</li>
                <li>{t('privacidad_7_lista_2')}</li>
                <li>{t('privacidad_7_lista_3')}</li>
                <li>{t('privacidad_7_lista_4')}</li>
                <li>{t('privacidad_7_lista_5')}</li>
                <li>{t('privacidad_7_lista_6')}</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_8_titulo')}</h2>
              <p>{t('privacidad_8_texto')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_9_titulo')}</h2>
              <p>{t('privacidad_9_texto')}</p>
              <p className="mt-2 whitespace-pre-line">{t('privacidad_9_direccion')}</p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-gray-800">{t('privacidad_10_titulo')}</h2>
              <p>{t('privacidad_10_texto')}</p>
            </section>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>{t('privacidad_actualizacion')}</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Privacidad; 