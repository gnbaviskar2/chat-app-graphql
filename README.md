# Apollo Monolith Backend Architecture

### Supports latest Apollo Graphql Server 3.12.0

### Web Socket Subscription for real time requirements

### Express Server for REST API

## Features

- Apollo GraphOS is the all-purpose hub for your GraphQL API, empowering developers across your stack to ship early, ship often, and ship safely.
- Typescript: TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.
- GraphQL WebSockets: Subscriptions allow clients to listen to real-time messages from the server. The client connects to the server with a bi-directional communication channel using the WebSocket protocol and sends a subscription query that specifies which event it is interested in
- Prisma: Prisma is a server-side library that helps developers read and write data to the database in an intuitive, efficient and safe way
- Postgres: PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance

## How to build and run:

- Clone the repo
- Install Postgres on local or install using Docker with following command:
  ```
  >docker-compose -f docker-compose.yml up -d --build
  ```
- Add following keys to .env
  ```
  DATABASE_URL="postgresql://postgres:changeme@localhost:5432/chat-app"
  PORT=8000
  ```
- Install dependencies
  ```
  yarn
  ```
- Run the server
  ```
  >npm run start
  ```

### Test the app using following graphql queries:

- Creating an user:

```mutation userSignUp {
      userSignUp(userSignUpPayload: {
        firstname: "kiran"
        lastname: "kiran"
        password: "QWRtaW5AMTIzNA=="
        email: "kiran1@gmail.com"
      }) {
        id
        firstname
        lastname
        email
        createdAt
      }
    }
```

- Getting users:

```
    query getUsers {
      getUsers(take: 5, cursor: 1) {
        id
        firstname
        lastname
        email
        createdAt
      }
    }
```

- Creating a message:

```
    mutation createMessage {
      createMessage(createMessagePayload: {
        text: "I am all right!"
        receiverId: 1
        senderId: 3
      }) {
        id
        text
        receiverId
        senderId
        createdAt
      }
    }
```

- Listening to real time messages:

```
    subscription Subscription {
      messageCreated {
        id
        text
        receiverId
        senderId
        createdAt
      }
    }
```
