import { Model, DataTypes, UUID } from "sequelize";
import db from "../../config/db";
// import Rent from "../Rent/model";

class Book extends Model {
  static init(sequelize) {
    // !constructor so no instance

    return super.init( // super = inherit "init" method from the parent class
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { sequelize, modelName: "Book" }
    );
  }

  static associate(models) {
    // this.belongsTo(models.User); 
    // this.belongsToMany(models.User, {through:models.Rent}); // MODIFIED
    this.belongsTo(models.User, {foreignKey: "user_id"}); // book has belongs to many users 

    // this.hasMany(models.Book, {foreignKey: "userId"});



    // models.Book, {as: 'books'}
    // this.belongsToMany(models.User, {through: 'rent'}); // creates pivot table without needing to declare a module

    return this; // return this model
  }
}

Book.init(db.sequelize); // call class's method without instantiating it
export default Book;
