import express from "express";
import env from "./src/config/env.js";
import Server from "./src/config/server.js";
import middlewares from "./src/config/middlewares.js";
// console.log(middlewares);
import cors from "cors";
import routes from "./src/modules";

import db from "./src/config/db.js";
// import routes from './src/modules/index'

// import routes from './src/modules/User/router'
const http = express();
// http.use(cors());
const server = new Server(http);
// http.use(cors());

server.middlewares(middlewares); // makes express use all middlewares contained in the middlewares object
server.routes(routes);
// server.middlewares(middlewares.apiLogger); // makes express use all middlewares contained in the middlewares object
// server.start(env.db_port)

(async () => {
  try {
    await db.associateAll(db.sequelize.models);
    // await db.sequelize.sync({alter:true});
    await db.sequelize.sync({

      force: true


    });
    
    
    // alter:true = will modify the database tables with the module models
    await server.start(env.port);
    console.log(`Database started on port ${env.db_port}.`);
  } catch (error) {
    console.error(error);
  }
})();
