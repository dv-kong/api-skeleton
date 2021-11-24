import { Model, DataTypes} from 'sequelize';
import db from '../../config/db.js';


class User extends Model {

    static init(sequelize) {
        return super.init(
        {
            id: DataTypes.UUID,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING, 
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize, 
            modelName: 'User'
        });
    }


    static associate(models) {
        // define association between User and Books
        this.hasMany(models.Book, { as: 'books' });
        // or this.hasOne
        return this;
    }
}

User.init(db.sequelize);

export default User;




