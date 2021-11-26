// import { logger } from "../config/middlewares";

const handleError = (err, req, res, next) => {
    const { message } = err;
    const statusCode = err.statusCode ? err.statusCode : 500;
  
    // logger.log(statusCode, err);
    console.log(`MESSAGE : ${message} STATUS : ${statusCode}`);
    // logger.log(statusCode, message);
    res.status(statusCode).json({
      statusCode,
      message,
    });
  };

  export default handleError;


  