/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        beams: "url('/src/assets/images/background/beams.jpg')",
      },
    },
  },
  plugins: [],
};
