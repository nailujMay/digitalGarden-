/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#101010",
        "custom-white": "#FFFAFA",
      },
    },
    fontFamily: {
      lora: ["Lora", "sarif"],
      roboto: ["Roboto", "sans-sarif"],
      roboto_mono: ["Roboto Mono"],
    },
  },
  plugins: [],
};
