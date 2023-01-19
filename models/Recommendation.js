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
            type: DataTypes.STRING,
            allowNull: false,
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
<<<<<<< HEAD:models/Posts.js
        modelName: 'posts'
    }
)

module.exports = Posts;
=======
        modelName: 'recommendation'
    }
)

module.exports = Recommendation
>>>>>>> 5ca5df3a58b0d2cab177b9b0bea715e601993bbb:models/Recommendation.js
