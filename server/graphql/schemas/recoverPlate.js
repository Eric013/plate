const recoverPlateTypeDef = `
  type Plate {
    id: ID
    name: String
    description: String
    status: String
    thumbnail: String
    content: String
    createdBy: String
  }
  extend type Mutation {
    recoverPlate(name: String, description: String, thumbnail: String,
      status: String, content: String, createdBy: String): Plate
  }
`

const recoverPlateResolvers = {
  Mutation: {
    recoverPlate: async (
      { db },
      { name, description, thumbnail, status, content, createdBy }
    ) => {
      const data = {
        name,
        description,
        thumbnail,
        status,
        content,
        createdBy: createdBy
      }
      return await db.collection('platesRecovered').insert(data)
    }
  },
  Plate: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  recoverPlateTypeDef,
  recoverPlateResolvers
}
