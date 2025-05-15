/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C2D48", // dark blue
        secondary: "#145DA0", // medium blue
        accent: "#2E8BC0", // light blue
        dark: "#0F172A", // very dark blue/black
        light: "#FFFFFF", // white
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out'
      }
    },
  },
  plugins: [],
}; 