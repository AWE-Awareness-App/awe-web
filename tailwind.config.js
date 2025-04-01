module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js.jsx,ts,tsx}', './public/index.html'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
