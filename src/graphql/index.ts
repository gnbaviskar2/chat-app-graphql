import { ApolloServerExpressConfig } from 'apollo-server-express';
import { merge } from 'lodash';
import typeDefs from './schema';
import queries from './queries';

const resolvers = merge(queries);

const apolloServerConfigs: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
};

export default apolloServerConfigs;
