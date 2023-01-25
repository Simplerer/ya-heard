const sequelize = require('../config/connection');
const { User, Recommendation, Location, Category, LocationCategory } = require('../models')
const locationData = require('./location-seeds.json');
const categoryData = require('./category-seeds.json');
const recommendationData = require('./recommendation-seeds.json');
const userData = require('./user-seeds.json');
const locationCategory = require('./locationCategory-seeds.json');


const init = async () => {
  await sequelize.sync({ force: true });

  const users= await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const locations= await Location.bulkCreate(locationData, {
  
  });
  const categories = await Category.bulkCreate(categoryData, {
   
  });
  const recommendations = await Recommendation.bulkCreate(recommendationData, {
    
  });  
  const locationCategories = await LocationCategory.bulkCreate(locationCategory);
 

  process.exit(0);
};

init();
