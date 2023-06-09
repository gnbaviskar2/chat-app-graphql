import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express/dist';
import { Query } from './graphql/queries';
import typeDefs from './schema';

// express app configurations goes here
const appMethods = {
  // declare all middlewares
  addApolloServer: async (app: Application): Promise<void> => {
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers: {
        Query,
      },
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
      app,
    });
  },
};

const appInit = (): Application => {
  // TODO: logRocket
  const chatApp = express();
  // intiate middlewares
  appMethods
    .addApolloServer(chatApp)
    .then(() => {
      console.log('Apollo server attached successfully');
    })
    .catch((e: unknown) => {
      console.log(`Could not add apollo server: ${e}`);
      process.exit(0);
    });
  return chatApp;
};

export default appInit;
