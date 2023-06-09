import { Application } from 'express';
import appInit from './app';
import serverInit from './server';

const beginMethods = {
  startChatServer: (): void => {
    // create app instance
    const server: Application = appInit();

    // start listening server
    serverInit(server);
  },
};

beginMethods.startChatServer();
