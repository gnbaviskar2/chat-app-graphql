import express, { Application } from 'express';

// express app configurations goes here
class App {
  // declare all middlewares

  // initiate middlewares
  public init(): Application {
    // TODO: logRocket

    const chatApp = express();

    // intiate middlewares

    return chatApp;
  }
}

export default App;
