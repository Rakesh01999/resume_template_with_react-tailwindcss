/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1F3A44',
          light: '#E1EEF4',
        },
        accent: '#5E8B95',
        resume: {
          navy: '#333C4E',
          teal: '#4FA1A7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'Outfit'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
