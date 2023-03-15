const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    img(height: String, width: String): String
    owner: User!
  }

  input PetInput {
    name: String
    type: String
  }

  input createPetInput {
    name: String!
    type: String!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    petOne(input: PetInput): Pet
    me: User!
  }

  type Mutation {
    createPet(input: createPetInput!): Pet!
  }
`;

module.exports = typeDefs;
