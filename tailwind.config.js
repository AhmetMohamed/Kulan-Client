/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#091423",
        Secondary: "#081B35",
        white: "#ffffff",
        Tertairy: "#3B5B86",
        body: "#C8C8C8",
        Green: "#15c5a4",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
