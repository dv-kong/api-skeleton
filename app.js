import express from 'express'
import env from './src/config/env.js'
import Server from './src/config/server.js'
import middlewares from './src/config/middlewares.js'
// console.log(middlewares);
import cors from 'cors';
import routes from './src/modules'
// import routes from './src/modules/index'

// import routes from './src/modules/User/router'
const http = express();
// http.use(cors());
const server = new Server(http);
// http.use(cors());

server.middlewares(middlewares); // makes express use all middlewares contained in the middlewares object
server.routes(routes);
// server.middlewares(middlewares.apiLogger); // makes express use all middlewares contained in the middlewares object
server.start(env.app_port)
