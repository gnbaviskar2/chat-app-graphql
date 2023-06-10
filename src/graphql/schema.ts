import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String!
    hello2: String!
  }
`;

export default typeDefs;
