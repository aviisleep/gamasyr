/** @type {import('tailwindcss').Config} */

// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Asegúrate de incluir todas las rutas relevantes de tus archivos.
  ],
  darkMode: 'class', // Habilitar modo oscuro basado en clases
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        slide: 'slide 20s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
    },
  },
  plugins: [],
};
