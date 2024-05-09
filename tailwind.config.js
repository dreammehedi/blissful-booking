/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#5143D9",
        primaryopacity: "#EDECFB",
        dark: "#0B0A12",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
