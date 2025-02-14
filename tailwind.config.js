/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        
        uno: "#2E8B57",
        dos: "#173F3F",
        tres: "#A2D9A0",
        cuatro: "#F5F5DC",
        quinto: "#FFED8A",
        sesto: "#F8F8F8",
        octavo: "#87CEEB",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        great: ["Great Vibes", "serif"],
        montserrat: ["Montserrat", "sans-serif"], // Corregido el error de tipografía
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        xl: "6px 6px 12px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [
    // Plugin para soportar textShadow en Tailwind (se puede simplificar)
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow": { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" },
        ".text-shadow-lg": { textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" },
        ".text-shadow-xl": { textShadow: "6px 6px 12px rgba(0, 0, 0, 0.5)" },
      });
    },
    // Plugin para el contenedor (esta es la forma correcta)
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1280px", // Ejemplo, ajusta a tu necesidad
          margin: "0 auto",
          padding: "1rem",
        },
        "@media (min-width: 640px)": {
          ".container": {
            maxWidth: "640px",
          },
        },
        "@media (min-width: 768px)": {
          ".container": {
            maxWidth: "768px",
          },
        },
        "@media (min-width: 1024px)": {
          ".container": {
            maxWidth: "1024px",
          },
        },
        "@media (min-width: 1280px)": {
          ".container": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
