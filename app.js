import express from 'express'
import env from './src/config/env.js'
import Server from './src/config/server.js'
import middlewares from './src/config/middlewares.js'
// console.log(middlewares);
import morgan from 'morgan';
import babel from '@babel/core'

const http = express();
const server = new Server(http);

// // TODO
// babel.transform("code", { // convert ES6 to ES5
//   presets: ["@babel/preset-env"],
// }); 

// const app = express()
// app.use(morgan('dev'))

// app.get('/', (req, res) => {
//   res.send('Server running')
// })
// app.get('*', (req, res) => {
//   res.send('Error 404') // TODO 404
// })
server.middlewares(middlewares); // makes express use all middlewares contained in the middlewares object
// server.middlewares(middlewares.apiLogger); // makes express use all middlewares contained in the middlewares object
server.start(env.app_port)
