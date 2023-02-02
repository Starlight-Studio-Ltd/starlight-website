/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        baseBlue: "#00469C",
        lightGray: "rgba(255, 255, 255, 0.181)",
      },
    },
  },
  plugins: [],
};
