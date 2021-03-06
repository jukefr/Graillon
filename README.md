# Graillon 

### Buy me covfefe ❤️
```
BTC     bc1qjqzkrfupcrgtzpeu0pmut24vq8tfzs9rqe6458
ETH     0x799b3b5520525CDd95d1D5C7Ba1a2Ee6037B1bFE
ADA     addr1q8mz3z7cw4jz9dacvpz6dpw2c6xke6nv8vk6rfnt7mkaat8vgnu796g5vrarn4pjgpdqkare9zryx645e25wcae8636q97typg
XRP     r3Bpcyp8zVNkaDzpppdRTuSXSvxAUJXAVj
LTC     ltc1qpja2nr6x9nz3q3ya3ec6ec5hxvm8dz52urn39z
BCH     1NAteBJF7wKw8BdzLJ6YE65ja1ZAHf68jf
DOGE    DL4VNBx6EGuPcgnJrfgxok9tTvcbVGKx3R
XMR     89S6qYdMJyZZ8ddKtFqTzGhuDZxJkNcmL9L6KzTSw7AeQos1uku2GBhBaHLUYtgv4TQRRQuNF4FixAu6geKC2r25NyWZj2Q
DASH    XtffD9gZFDKWWpabMyAi8sF9EeDREH5dUy
DCR     DsSAqeDekTCvbd84GkAofHyutrFrFDX1EnD
ZEC     t1P336iRRMM6Yu2wTzXJmjm6p4RgNAQkgsM
STRAX   SVfFcCZtQ8yMSMxc2K8xzFr4psHpGpnKNT 
```

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

## Docker
To run the stack easily there is a `docker-compose.yml` file.
```bash
$ docker-compose build
$ docker-compose up
```

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
