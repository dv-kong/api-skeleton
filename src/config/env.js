import dotenv from 'dotenv';
dotenv.config();

const env = {
    app_port: process.env.DB_PORT || 3050
}

export default env;