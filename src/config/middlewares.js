import morgan from 'morgan'; 
import express from 'express';
import cookieParser from 'cookie-parser';
import winston from 'winston';
import cors from 'cors';
// import Logger from '../helpers/logger'

// const logger = new Logger(winston);

/**
 * @object Middlewares contains: 
 * - Cookie Parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names. 
 * - ApiLogger (morgan): Logs all requests to the console
 * - Json body parser: Parse the body request to JSON format
 * - Winston
 */
const middlewares = { // server.use(middleware)
     json: express.json(),
     urlencoded: express.urlencoded({extended: false}),
     cookie: cookieParser(),
     cors: cors(),
     apiLogger: morgan('dev')
}

export default middlewares;
// export {logger}