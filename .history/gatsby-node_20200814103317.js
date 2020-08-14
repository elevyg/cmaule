const path = require("path")

const machinery = require("./src/data/maquinaria.json")

const IMAGE_PATH = require("./src/images/machinery")


exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  machinery.forEach((card) => {
    const {
      name,
      price,
      priceTimeUnit,
      img
    } = machinery