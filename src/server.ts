import { Application } from 'express';
import { Server } from 'http';

const PORT: string | number = process.env.PORT ? process.env.PORT : 8000;

// server configurations methods
const serverMethods = {
  listen: (expressObj: {
    messageApp: Application;
    httpServer: Server;
  }): void => {
    expressObj.httpServer.listen(PORT, () => {
      console.log(`chat app is running on PORT : ${PORT}`);
      console.log(`Worker ${process.pid} started`);
    });
  },
};

const serverInit = (expressObj: {
  messageApp: Application;
  httpServer: Server;
}): void => {
  serverMethods.listen(expressObj);
};

export default serverInit;
