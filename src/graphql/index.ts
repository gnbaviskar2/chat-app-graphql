import { ApolloServerExpressConfig } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
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
