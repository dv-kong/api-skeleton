import { Model, DataTypes, UUID } from "sequelize";
import db from "../../config/db";

class Book extends Model {
  static init(sequelize) {
    // !constructor so no instance

    return super.init( // super = inherit "init" method from the parent class
      {
        id: DataTypes.UUID,
        title: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
      },
      { sequelize, modelName: "Book" }
    );
  }

  static associate(models) {
    this.belongsTo(models.User);
    return this; // return this model
  }
}

Book.init(db.sequelize); // call class's method without instantiating it
export default Book;
