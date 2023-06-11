import { Application } from 'express';
import { createServer, Server } from 'http';
import appInit from './app';
import serverInit from './server';

const beginMethods = {
  startChatServer: (): void => {
    // create app instance
    const expressObj = appInit();

    // start listening server
    serverInit(expressObj);
  },
};

beginMethods.startChatServer();
