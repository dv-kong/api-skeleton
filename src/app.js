require('dotenv').config() // load env variables

// import middlewares from './config/middlewares'
// require('./config/middlewares')
// console.log(middlewares);

import middlewares from './config/middlewares.js'
console.log(middlewares);

const express = require('express')
const morgan = require('morgan')
const port = process.env.PORT || 3000
require("@babel/core").transform("code", { // convert ES6 to ES5
  presets: ["@babel/preset-env"],
});
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