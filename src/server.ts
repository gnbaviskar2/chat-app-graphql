import { Application } from 'express';

const PORT: string | number = process.env.PORT ? process.env.PORT : 8000;

// server configurations methods
const serverMethods = {
  listen: (server: Application): void => {
    server.listen(PORT, () => {
      console.log(`chat app is running on PORT : ${PORT}`);
      console.log(`Worker ${process.pid} started`);
    });
  },
};

const startServer = (server: Application): void => {
  serverMethods.listen(server);
};

export default startServer;
