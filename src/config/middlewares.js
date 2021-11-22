import morgan from 'morgan'; 
import winston from 'winston';
import Logger from '../helpers/logger'

const logger = new Logger(winston);

const middlewares = {
     apiLogger:morgan('dev')

}

// console.log(logger);
export default middlewares;
export {logger}