import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n';

export function useT() {
  const { language } = useLanguage();
  return (key) => translations[language][key] || key;
} 