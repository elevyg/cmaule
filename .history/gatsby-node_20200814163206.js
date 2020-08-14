const path = require("path")

const machinery = require("./src/data/maquinaria.json")
const trucks = require("./src/data/camiones.json")
const IMAGE_PATH = "./src/images/machinery"

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  machinery.forEach(machine => {
    const { id, name, price, priceTimeUnit, img } = machine
    const { pictureName, ext } = path.parse(img)
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, img)

    const data = {
      pictureName,
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
      id,
      name,
      price,
      priceTimeUnit,
      image: imageNode,
      internal: {
        type: "Machine",
        contentDigest: createContentDigest(machine),
      },
    }

    actions.createNode(node)
  })

  trucks.forEach(truck => {
    const { id, name, price, priceTimeUnit } = truck

    const node_2 = {
      id,
      name,
      price,
      priceTimeUnit,
      internal: {
        type: "Truck",
        contentDigest: createContentDigest(truck),
      },
    }

    actions.createNode(node_2)
  })
}
