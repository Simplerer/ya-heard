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

  const users= await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const locations= await Location.bulkCreate(locationData, {
    individualHooks: true,
    returning: true,
  });
  for (const category of categoryData) {
    await Category.create({
      ...category,
      location_id: locations[Math.floor(Math.random() * users.length)].id,
    });
  }
  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });
  await Recommendation.bulkCreate(recommendationData, {
    individualHooks: true,
    returning: true,
  });  
  for (const recommendation of recommendationData) {
    await Recommendation.create({
      ...recommendation,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

init();
