const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const Schema = require('./schemas/schema')
const resolvers = require('./resolvers/resolver')


const schema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers
})

app.prepare()
  .then(() => {
    const server = express()

    server.use('/graphql', bodyParser.json(), graphqlExpress({
      schema
    }))

    server.use('/graphiql', graphiqlExpress({
      endpointURL: '/graphql'
    }))

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
