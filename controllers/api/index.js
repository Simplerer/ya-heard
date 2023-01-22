const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const recommendationRoutes = require('./recommendation-routes');

router.use('/users', userRoutes);
router.use('/recommendations', recommendationRoutes);

module.exports = router;
