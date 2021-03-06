import {
    Sequelize
} from "sequelize";
import config from "./env";

const sequelize = new Sequelize(
    config.db_name,
    config.db_user,
    config.db_password, {
        dialect: 'mysql',
        port: config.db_port,
        host: config.db_host
    } // optional params
)

const associateAll = async (models) => {
    Object.values(models).map((model) => model.associate(models))

}

const db = {
    sequelize,
    associateAll
}

export default db;