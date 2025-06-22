import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="ml-2 px-3 py-1 rounded focus:outline-none border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDarkMode ? 'Modo claro' : 'Modo oscuro'}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
} 