import { Model, DataTypes } from "sequelize";
import db from "../../config/db.js";

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.STRING,
          // type: Sequelize.UUID,
          // defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
      }
    );
  }

  static associate(models) {
    // define association between User and Books
    this.hasMany(models.Book, {foreignKey: "user_id"}); // user has many books 
    // this.hasMany(models.Book, { as: "books" });
    // User.hasMany(models.Book)
    // models.Book.hasMany(User)

    // or this.hasOne
    return this;
  }
}

User.init(db.sequelize);

export default User;
