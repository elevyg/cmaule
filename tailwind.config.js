module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#5e5874",
        "custom-blue": "#1d3d82",
        "custom-yellow": "#fcb501",
      },
    },
  },
  variants: { backgroundColor: ({ before }) => before(["active"]) },
  plugins: [require("@tailwindcss/custom-forms")],
}
