import {
  ApolloServerExpressConfig,
  makeExecutableSchema,
} from 'apollo-server-express';
import { merge } from 'lodash';
import typeDefs from './schema';
import queries from './queries';
import mutations from './mutations';

const resolvers = merge(queries, mutations);

const apolloServerConfigs: ApolloServerExpressConfig = {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
};

export default apolloServerConfigs;
