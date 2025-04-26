import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: { 
        neuromorphic: '9px 9px 16px #cbced1, -9px -9px 16px #ffffff', 
        'neuromorphic-inset': 'inset 9px 9px 16px #cbced1, inset -9px -9px 16px #ffffff', 
      },
      colors:{
        halfwhite: "#ecf0f3",
        redish: '#ff014f', 
        black: '#1e2125',
      },
      fontFamily:{
        // Heading fonts
         heading: ['Playfair Display', ...defaultTheme.fontFamily.serif],
         poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
         body: ['Inter', ...defaultTheme.fontFamily.sans],
         button: ['Roboto', ...defaultTheme.fontFamily.sans],
         badge: ['Nunito+Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  darkMode: "class", // Enable class-based dark mode
  plugins: [],
}