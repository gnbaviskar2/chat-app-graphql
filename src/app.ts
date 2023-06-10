import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { Server, createServer } from 'http';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import schema from './graphql';
// import { WebSocketServer } from 'ws';

// express app configurations goes here
const appMethods = {
  // define all middlewares
  attachApolloServer: async (
    messageApp: Application,
    httpServer: Server
  ): Promise<void> => {
    // Create our WebSocket server using the HTTP server we just set up.
    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql',
    });
    // Save the returned server's info so we can shutdown this server later
    const serverCleanup = useServer({ schema }, wsServer);
    const apolloServer = new ApolloServer({
      schema,
      csrfPrevention: true,
      cache: 'bounded',
      plugins: [
        // Proper shutdown for the HTTP server.
        ApolloServerPluginDrainHttpServer({ httpServer }),

        // Proper shutdown for the WebSocket server.
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await serverCleanup.dispose();
              },
            };
          },
        },
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
      ],
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
      app: messageApp,
    });
  },
};

const appInit = (): { messageApp: Application; httpServer: Server } => {
  // TODO: logRocket

  // initiate express app
  const messageApp = express();
  // create http server instance
  const httpServer: Server = createServer(messageApp);
  // initiate middlewares
  appMethods
    .attachApolloServer(messageApp, httpServer)
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
