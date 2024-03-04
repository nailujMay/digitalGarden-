/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      lora: ["Lora", "sarif"],
      roboto: ["Roboto", "sans-sarif"],
      roboto_mono: ["Roboto Mono"],
    },
    colors: {
      // custom_black: "#101010",
    },
  },
  plugins: [],
};
