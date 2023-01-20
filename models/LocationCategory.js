const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LocationCategory extends Model {}

LocationCategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          location_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'location',
              key: 'id',
            },
          },
          category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'category',
              key: 'id',
            },
          }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'locationCategory'
    }
)

module.exports = LocationCategory;