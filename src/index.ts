import { Application } from 'express';
import init from './app';
import serverMethods from './server';

const beginMethods = {
  startChatServer: (): void => {
    // create app instance
    const server: Application = init();

    // start listening server
    serverMethods(server);
  },
};

beginMethods.startChatServer();
