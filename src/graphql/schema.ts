import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: Int!
    firstname: String!
    lastname: String!
    email: String!
    createdAt: String
  }

  input userSignInput {
    firstname: String
    lastname: String
    password: String
    email: String
  }

  type Query {
    hello: String!
    hello2: String!
  }

  type Mutation {
    userSignUp(userSignInput: userSignInput!): User
  }
`;

export default typeDefs;
