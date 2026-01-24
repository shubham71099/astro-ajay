/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4B400",   // saffron yellow
        secondary: "#E65100", // deep orange
        light: "#FFF8E1",     // soft yellow bg
        dark: "#3E2723",      // brown text
      },
    },
  },
  plugins: [],
};
