const { gql } = require('apollo-server')
const { ApolloServer } = require('apollo-server')

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

type Query {
  me: User!
}
`

const resolvers = {
  Query: {
    /// me = the resolver
    me() {
      return {
        email: 'yoda@masters.com',
        avatar: 'http://yoda.png',
        friends: [],
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(5000)
  .then(() => console.log('on port 5000'))

// Email field on a user should ALWAYS have a value - with the !

// At a minimum a schema needs a query + type:
// 1. A schema with type def
// 2. Query definition
// 3. And a resolver for it
// --> minimum working GraphQL, rest is more of the same or optimization (speed, security etc)

