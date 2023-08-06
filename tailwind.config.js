const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        xs: "420px",
      },
      colors: {
        customGray: {
          light: "#2e3039",
          base: "#eeeeee",
          dark: "#1f2028",
        },
        dark: "#20252C",
        violetPrimary: "#6d28d9",
        violetSecondary: "#4c1d95",
        bluePrimary: "#14baff",
        blueSecondary: "#075985",
        "gradient-from": "85, 85, 85",
        "gradient-to": "85, 85, 85",
      },
      boxShadow: {
        pink: "0px 0px 30px -3px rgba(255, 181, 181, 1)",
        nav: "0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,.10)",
        "nav-dark":
          "0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,.05)",
      },
      backgroundSize: {
        "1440px": "1440px 1px",
      },
    },
  },
  plugins: [],
};
