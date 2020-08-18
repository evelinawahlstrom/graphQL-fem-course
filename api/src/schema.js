const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  type Query {
    pets: [Pet]!
  }
`;

/// type id: ID - is a unique identifier, and a string

///  pets: [Pet]! --> equals returns all the pets in the database

module.exports = typeDefs
