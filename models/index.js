const User = require('./User');
const Category = require('./Category')
const Recommendation = require('./Recommendation');
const Location = require('./Location');


// ASSOCIATIONS HERE

Recommendation.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Recommendation, {
  foreignKey: 'user_id'
});

Category.belongsToMany(User, {
  through: {
      model: Post,
  }
})

Location.hasMany(Category, {
  foreignKey: location_id
})

Recommendation

module.exports = {
  User,
  Category,
  Recommendation,
  Location
};
