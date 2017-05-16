const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')

const plates = require('./schemas/plates')
const getUserProfile = require('./schemas/getUserProfile')
const plate = require('./schemas/plate')
const addPlate = require('./schemas/addPlate')
const recoverPlate = require('./schemas/recoverPlate')
const login = require('./schemas/login')
const removePlate = require('./schemas/removePlate')
const editPlate = require('./schemas/editPlate')
const savePlateContent = require('./schemas/savePlateContent')
const register = require('./schemas/register')
const contactUs = require('./schemas/contactUs')
const changePassword = require('./schemas/changePassword')

const rootSchema = `
  type Query {
    version: String!
  }
  type Mutation {
    version: String!
  }
  schema {
    query: Query
    mutation: Mutation
  }
`

const rootResolvers = {
  Query: {
    version: () => require('../../package.json').version
  },
  Mutation: {
    version: () => require('../../package.json').version
  }
}

const schema = makeExecutableSchema({
  typeDefs: [
    rootSchema,
    plates.platesTypeDef,
    getUserProfile.getUserProfileTypeDef,
    plate.plateTypeDef,
    addPlate.addPlateTypeDef,
    login.loginTypeDef,
    removePlate.removePlateTypeDef,
    editPlate.editPlateTypeDef,
    savePlateContent.savePlateContentTypeDef,
    register.registerTypeDef,
    contactUs.contactUsTypeDef,
    changePassword.changePasswordTypeDef,
    recoverPlate.recoverPlateTypeDef
  ],
  resolvers: merge(
    rootResolvers,
    plates.platesResolvers,
    getUserProfile.getUserProfileResolvers,
    plate.plateResolvers,
    addPlate.addPlateResolvers,
    login.loginResolvers,
    removePlate.removePlateResolvers,
    editPlate.editPlateResolvers,
    savePlateContent.savePlateContentResolvers,
    register.registerResolvers,
    contactUs.contactUsResolvers,
    changePassword.changePasswordResolvers,
    recoverPlate.recoverPlateResolvers
  )
})

module.exports = schema
