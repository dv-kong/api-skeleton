

import { Sequelize } from 'sequelize';
import config from './env';

const sequelize = new Sequelize(

    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    { dialect: 'mysql', port: config.DB_PORT, host: config.DB_HOST} // optional params
)

const associateAll = async (models) => {
Object.values(models).map((model) => model.associate(models))

}

const db = { sequelize, associateAll}

export default db;