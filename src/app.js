import dotenv from 'dotenv'
dotenv.config()

import middlewares from './config/middlewares.js'
console.log(middlewares);

import express from 'express'
import morgan from 'morgan';
const port = process.env.PORT || 3000


import babel from '@babel/core'
babel.transform("code", { // convert ES6 to ES5
  presets: ["@babel/preset-env"],
}); // TODO: works?
const app = express()
app.use(morgan('dev'))
app.get('/', (req, res) => {
  res.send('Server running')
})
app.get('*', (req, res) => {
  res.send('Error 404')
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})