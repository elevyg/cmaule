const { COLORES } = require("./src/constants/colors")

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        "custom-gray": COLORES[0],
        "dark-blue": "#1d3d82",
      },
    },
  },
  variants: {},
  plugins: [],
}
