import { Application } from 'express';
import chatApp from './app';
import startServer from './server';

const beginMethods = {
  startChatServer: (): void => {
    // create app instance
    const server: Application = new chatApp().init();

    // start listening server
    startServer(server);
  },
};

beginMethods.startChatServer();
