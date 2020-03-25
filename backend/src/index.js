const { GraphQLServer } = require('graphql-yoga')
const { nexusPrismaPlugin } = require('nexus-prisma')
const { makeSchema } = require('nexus')
const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')

const prisma = new PrismaClient()

const options = {
  cors: {
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://frontend:3000',
    ],
  },
}

new GraphQLServer({
  schema: makeSchema({
    types,
    plugins: [nexusPrismaPlugin()],
    outputs: {
      schema: __dirname + '/../schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
  }),
  middlewares: [permissions],
  context: (request) => {
    return {
      ...request,
      prisma,
    }
  },
}).start(options, () => console.log(`> Ready on http://localhost:4000`))
