const User = require('./User');
const Category = require('./Category')
const Recommendation = require('./Recommendation');
const Location = require('./Location');
const LocationCategory = require('./LocationCategory');


// ASSOCIATIONS HERE

Recommendation.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Recommendation, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Recommendation, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Recommendation.belongsTo(Category, {
  through: {
    model: LocationCategory,
  }
});

Location.belongsToMany(Category, {
  through: {
    model: LocationCategory
  }
})

Category.belongsToMany(Location, {
  through: {
    model: LocationCategory
  }
})


LocationCategory.belongsTo(Location);
LocationCategory.belongsTo(Category);
LocationCategory.belongsTo(Recommendation);


module.exports = {
  User,
  Category,
  Recommendation,
  Location,
  LocationCategory
};
