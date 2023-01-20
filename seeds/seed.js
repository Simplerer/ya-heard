const sequelize = require('../config/connection');
const locationData = require('./location-seeds.json');
const Location = require('../models/Location');

const init = async () => {
  await sequelize.sync({ force: true });

  await Location.bulkCreate(locationData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

init();
