/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './node_modules/tw-elements/js/**/*.js'],
  theme: {
    extend: {}
  },
  plugins: [require('tw-elements/plugin.cjs')],
  darkMode: 'class'
}
