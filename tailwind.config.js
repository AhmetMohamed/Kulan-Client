/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#091423",
        Secondary: "#081B35",
        white: "#ffffff",
        Tertairy: "#3B5B86",
        body: "#C8C8C8",
        Green: "#15c5a4",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
