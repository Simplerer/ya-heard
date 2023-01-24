const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const categoryRoutes = require('./category-routes.js');

router.use('/api', apiRoutes);
router.use('/location', categoryRoutes);
router.use(homeRoutes);

module.exports = router;
