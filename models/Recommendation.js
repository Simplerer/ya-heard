const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recommendation extends Model {}

Recommendation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[10,500],
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recommendation'
    }
)

module.exports = Recommendation
