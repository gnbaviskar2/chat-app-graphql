import express, { Application, Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { Server, createServer } from 'http';
import apolloServerConfigs from './graphql';
// import { WebSocketServer } from 'ws';

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

const appInit = (): { messageApp: Express; httpServer: Server } => {
  // TODO: logRocket

  // initiate express app
  const messageApp = express();
  // create http server instance
  const httpServer: Server = createServer(messageApp);
  // initiate middlewares
  appMethods
    .attachApolloServer(messageApp)
    .then(() => {
      console.log('Apollo server attached successfully');
    })
    .catch((e: unknown) => {
      console.log(`Could not add apollo server: ${e}`);
      process.exit(0);
    });
  return {
    messageApp,
    httpServer,
  };
};

export default appInit;
