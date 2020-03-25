# Graillon 

Fullstack boilerplate for fast project prototyping.
This project is not made for 99.9% uptime or stability, only for prototyping.
Most of the packages used are either in beta or in preview stage (again, not ready for production).

## Stack Schematic

```
                     BACKEND                              FRONTEND
  +-----------------------------------------+    +------------------------+

  +----------+    +---------+    +----------+    +---------+    +---------+
  | DATABASE +--->+ PRISMA2 +--->+ GRAPHQL- +--->+ APOLLO- +--->+ NEXT.JS |
  |   SQLI   |    |         |    |   YOGA   |    |  CLIENT |    |         |
  +----------+    +---------+    +----------+    +---------+    +---------+
```

## Boilerplating
If using this as a boilerplate there are a couple of strings you need to search and replace :
- CHANGEME_SECRET
- CHANGEME_BACKEND_NAME
- CHANGEME_FRONTEND_NAME

You also need to setup the graphql uri in `frontend\util\apollo-client.js`, the default is `localhost:4000`

## Backend

**prisma2** with **sqlite** database for fast prototyping.
**graphql-yoga** to run the server.
**nexus** for automatic schema generation and crud operations.
**JWT/bcrypt** authentication.
**graphql-shield** for permissions.

### Backend Setup

```bash
$ cd backend
$ npm i
$ npm run bootstrap
$ npm start
```

## Frontend

**next.js** (react) ismomorphic webapp for the same reasons as backend (prototyping speed).
**@apolo/client** for easy graphql bidings.
Does not use redux, simply the new context hooks offered by latest react versions.

### Frontend Setup

```bash
$ cd frontend
$ npm i
$ npm run build
$ npm run start
```

## Possible Improvements

1. use `pm2` to manage processes
2. `dockerize` everything
3. migrate to a proper sql database in production
4. use cookies instead of localstorage on frontend for better security
5. investigate weird logout bug on frontend with router

Made with ❤️ by jukefr (https://github.com/jukefr)
