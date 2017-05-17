const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const moment = require('moment')

const env = require('../../../env-config')

const registerTypeDef = `
  extend type Mutation {
    register(firstName: String!, lastName: String!, username: String!, password: String!, email: String!): String
  }
`

const registerResolvers = {
  Mutation: {
    register: async (
      { db },
      { firstName, lastName, username, password, email }
    ) => {
      const duplicateUser = await db
        .collection('users')
        .find({ username: username })
        .count()
      if (duplicateUser !== 1) {
        const saltRounds = 10

        const hash = bcrypt.hashSync(password, saltRounds)

        const data = {
          firstName,
          lastName,
          username,
          password: hash,
          email,
          plan: 'free',
          dateSignedUp: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
          lastLogin: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
          planStart: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
          planEnd: 'Free plan'
        }

        await db.collection('users').insertOne(data)
        const newUser = await db
          .collection('users')
          .findOne({ username: username })
        const token = jwt.sign(newUser, env.JWT_SECRET, {
          expiresIn: 60 * 60 * 24
        })

        return token
      }
    }
  }
}

module.exports = {
  registerTypeDef,
  registerResolvers
}
