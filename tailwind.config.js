/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#18d399",
        secondary: "#172c45",
        third: "#6ef0fa",
      }
    },
  },
    plugins: [require('@tailwindcss/forms')],

}
