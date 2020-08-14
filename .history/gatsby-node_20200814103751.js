const path = require("path")

const machinery = require("./src/data/maquinaria.json")

const IMAGE_PATH = require("./src/images/machinery")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  machinery.forEach(machine => {
    const { id, name, price, priceTimeUnit, img } = machine
    const { name, ext } = path.parse(img)
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image)
    const data = {
      name,
      ext,
      absolutePath, // <-- required
      extension: ext.substring(1), // <-- required, remove the dot in `ext`
    }

    // build and create the image node
    const imageNode = {
      ...data,
      id: createNodeId(`machine-image-${name}`),
      internal: {
        type: "MachineImage",
        contentDigest: createContentDigest(data),
      },
    }

    actions.createNode(imageNode)

    const node = {
      title,
      category,
      description,
      technology,
      link,
      // when imageNode is created, the sharp plugin adds childImageSharp to the node
      // so it will be available under the `image` field.
      image: imageNode,
      alt,
      tags: tagsStringToObject(tags),
      id: createNodeId(`card-${title}`),
      internal: {
        type: "PortfolioCard",
        contentDigest: createContentDigest(card),
      },
    }

    actions.createNode(node)
  })
}
