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
          from: {
            transform: "translateX(50)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        slide: "slide 10s linear infinite",
      },
    },
  },
  plugins: [],
};
