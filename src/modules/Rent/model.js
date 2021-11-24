import { Model, DataTypes } from "sequelize";
import db from "../../config/db.js";
import User from "../User/model";
import Book from "../Book/model";

class Rent extends Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        modelName: "Rent",
      }
    );
  }
  static associate(models) {
    return this;
  }
}

Rent.init(db.sequelize);

export default Rent;

User.belongsToMany(Book, { through: Rent });
Book.belongsToMany(User, { through: Rent });
