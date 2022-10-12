/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assests/*.{liquid,json}",
    "./layout/*.{liquid,json}",
    "./sections/*.{liquid,json}",
    "./snippets/*.{liquid,json}",
    "./templates/*.{liquid,json}",
    "./templates/customers/*.{liquid,json}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
