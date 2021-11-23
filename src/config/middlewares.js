import morgan from 'morgan'; 
import express from 'express';
import cookieParser from 'cookie-parser';
import winston from 'winston';
// import Logger from '../helpers/logger'

// const logger = new Logger(winston);

/**
 * @object Middlewares contains: 
 * - Cookie Parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names. 
 * - ApiLogger (morgan): Logs all requests to the console
 * - Json body parser: Parse the body request to JSON format
 */
const middlewares = {
     cookie: cookieParser(),
     apiLogger: morgan('dev'),
     urlencoded: express.urlencoded({extended: false}),
     json: express.json(),
}

export default middlewares;
// export {logger}