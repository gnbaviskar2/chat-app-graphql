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

  type Message {
    id: ID
    text: String
    receiverId: Int
    senderId: Int
    createdAt: DateTime
  }

  input createMessageInput {
    text: String
    receiverId: Int
    senderId: Int
  }

  input getMessagesByUserIdInput {
    receiverId: Int
    senderId: Int
    take: Int
    cursor: Int
  }

  type Query {
    getUsers(take: Int!, cursor: Int!): [User]!
    getMessagesByUserId(
      getMessagesByUserIdPayload: getMessagesByUserIdInput
    ): [Message]
  }

  type Mutation {
    userSignUp(userSignUpPayload: userSignUpInput!): User
    userLogin(email: String!, password: String!): User
    createMessage(createMessagePayload: createMessageInput): Message!
  }
`;

export default typeDefs;
