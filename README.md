# PROJECT_NAME
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

## Backend
Prisma2 with SQLite database for fast prototyping.
Graphql-yoga to run the server.

### Backend Setup
```bash
$ cd backend
$ npm i
$ npm run bootstrap
$ npm start
```

## Frontend
Next.js (react) ismomorphic webapp for the same reasons as backend (prototyping speed).
Appolo-client and hooks for react.
JWT for auth.
Does not use redux, simply the new context hooks offered by latest React versions.

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

Made with ❤️ by jukefr (https://github.com/jukefr)