/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#1f2937",
      secondary: "#374151",
      info: "#1fb6ff",
      danger: "#f14273",
      white: "#f1f1f1",
      dark: "#222",
    },
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "480px",
      md: "667px",
      mdl: "768px",
      lg: "976px",
      lgl: "1024px",
      xl: "1280px",
      xxl: "1440px",
      "2xl": "1920px",
    },
    fontSize: {
      xs: "0.5rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.50rem",
      "2xl": "1.75rem",
      "3xl": "2.25rem",
      "4xl": "2.50rem",
      "5xl": "3.75rem",
    },
    extend: {},
  },
  plugins: [],
};
