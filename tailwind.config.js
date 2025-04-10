const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js.jsx,ts,tsx}', './public/index.html'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact, require('@tailwindcss/aspect-ratio')],
}