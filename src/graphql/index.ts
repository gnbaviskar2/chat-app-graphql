import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import { merge } from 'lodash';
import typeDefs from './schema';
import queries from './queries';
import mutations from './mutations';

const resolvers = merge(queries, mutations);

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
