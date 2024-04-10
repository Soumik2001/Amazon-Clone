module.exports = {
  content: [
    "./public/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};