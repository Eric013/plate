const { ContentState, convertToRaw } = require('draft-js')

const addPlateTypeDef = `
  extend type Mutation {
    addPlate(name: String, description: String, thumbnail: String, createdBy: String): Plate
  }
`

const addPlateResolvers = {
  Mutation: {
    addPlate: async ({ db }, { name, description, thumbnail, createdBy }) => {
      const initialContent = JSON.stringify(
        convertToRaw(
          ContentState.createFromText(
            'Edit this content to get started filling your plate'
          )
        )
      )
      const data = {
        name,
        description,
        thumbnail,
        status: 'New',
        content: initialContent,
        createdBy: createdBy
      }

      await db.collection('plates').insert(data)
      return data
    }
  }
}

module.exports = {
  addPlateTypeDef,
  addPlateResolvers
}
