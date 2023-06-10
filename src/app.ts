import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import apolloServerConfigs from './graphql';

// express app configurations goes here
const appMethods = {
  // define all middlewares
  attachApolloServer: async (app: Application): Promise<void> => {
    const apolloServer = new ApolloServer(apolloServerConfigs);
    await apolloServer.start();
    apolloServer.applyMiddleware({
      app,
      path: '/graphql',
    });
  },
};

const appInit = (): Application => {
  // TODO: logRocket
  const chatApp = express();
  // initiate middlewares
  appMethods
    .attachApolloServer(chatApp)
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
