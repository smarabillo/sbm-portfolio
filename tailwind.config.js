/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure that the paths are correct
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss-animated"),
    require("daisyui"),
  ],
};
