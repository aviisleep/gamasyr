/** @type {import('tailwindcss').Config} */

// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Asegúrate de incluir todas las rutas relevantes de tus archivos.
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 20s linear infinite",
      },
    },
  },
  plugins: [],
};
