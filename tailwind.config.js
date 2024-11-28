/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées pour le design néomorphique
        'background': '#e0e5ec',
        'primary': '#3b82f6',
        'secondary': '#10b981',
        'text': '#1f2937',
      },
      boxShadow: {
        // Ombres néomorphiques
        'neomorph-light': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
        'neomorph-dark': '9px 9px 16px rgba(0,0,0,0.3), -9px -9px 16px rgba(50,50,50, 0.3)',
      },
      borderRadius: {
        'large': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class', // Support du mode sombre
}