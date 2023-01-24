const User = require('./User');
const Category = require('./Category')
const Recommendation = require('./Recommendation');
const Location = require('./Location');
const LocationCategory = require('./LocationCategory');


// ASSOCIATIONS HERE

Recommendation.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Recommendation, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Recommendation, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Location.hasMany(Recommendation, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});


Location.belongsToMany(Category, {
  through: {
    model: LocationCategory, 
    unique: false,
  }
})

Category.belongsToMany(Location, {
  through: {
    model: LocationCategory, 
    unique: false,
  }
})



module.exports = {
  User,
  Category,
  Recommendation,
  Location,
  LocationCategory
};