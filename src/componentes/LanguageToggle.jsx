import { useLanguage } from '../contexts/LanguageContext';
import { useT } from '../hooks/useT';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const t = useT();
  return (
    <select
      value={language}
      onChange={e => setLanguage(e.target.value)}
      className="ml-2 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none"
      aria-label={t('idioma')}
      title={t('idioma')}
    >
      <option value="es">{t('espanol')}</option>
      <option value="en">{t('ingles')}</option>
    </select>
  );
} 