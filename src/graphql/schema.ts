import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar DateTime
  type User {
    id: Int!
    firstname: String!
    lastname: String!
    email: String!
    createdAt: DateTime
  }

  input userSignUpInput {
    firstname: String
    lastname: String
    password: String
    email: String
  }

  type Query {
    getUsers(take: Int!, cursor: Int!): [User]!
  }

  type Mutation {
    userSignUp(userSignUpPayload: userSignUpInput!): User
    userLogin(email: String!, password: String!): User
  }
`;

export default typeDefs;
