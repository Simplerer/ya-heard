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

    }
)

module.exports = LocationCategory;