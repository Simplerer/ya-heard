const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const recommendationRoutes = require('./recommendation-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/recommendations', recommendationRoutes);
router.use('/location', categoryRoutes);


module.exports = router;
