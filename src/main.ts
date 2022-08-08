import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { UsersResolver } from './modules/users/graphql/resolvers/UsersResolver'
import { connect } from './config/database'
import { PetsResolver } from './modules/pets/graphql/resolvers/PetsResolver'

const app = express()

async function init () {
  await connect()

  const schema = await buildSchema({
    resolvers: [UsersResolver, PetsResolver]
  })

  const apolloServer = new ApolloServer({
    schema
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app })

  app.get('/', (req, res) => {
    return res.send('Hello World!')
  })

  app.listen(3000, () => {
    console.log('Server is running on port 3000 🚀')
  })
}

init()
