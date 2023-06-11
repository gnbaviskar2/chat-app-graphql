import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import { merge } from 'lodash';
import typeDefs from './schema';
import queries from './queries';
import mutations from './mutations';
import subscriptions from './subscriptions';

const resolvers = merge(queries, mutations, subscriptions);

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
