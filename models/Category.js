const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'location',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
)

<<<<<<< HEAD
module.export = Category;
=======
module.exports = Category
>>>>>>> 5ca5df3a58b0d2cab177b9b0bea715e601993bbb
