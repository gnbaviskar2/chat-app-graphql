import { ApolloServerExpressConfig } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
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
  // plugins: [
  //   {
  //     async serverWillStart() {
  //       return {
  //         async drainServer() {
  //           subscriptionServer.close();
  //         },
  //       };
  //     },
  //   },
  // ],
};

export default apolloServerConfigs;
