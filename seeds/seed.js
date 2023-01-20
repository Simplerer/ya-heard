const sequelize = require('../config/connection');
const locationData = require('./location-seeds.json');
const Location = require('../models/Location');
const categoryData = require('./category-seeds.json');
const Category = require('../models/Category');
const recommendationData = require('./recommendation-seeds.json');
const Recommendation = require('../models/Recommendation');
const userData = require('./user-seeds.json');
 const User = require('../models/User');


const init = async () => {
  await sequelize.sync({ force: true });

  await Location.bulkCreate(locationData, {
    individualHooks: true,
    returning: true,
  });
  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });
  await Recommendation.bulkCreate(recommendationData, {
    individualHooks: true,
    returning: true,
  });  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

init();
