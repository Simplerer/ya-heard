const router = require('express').Router();
const { Category, Location, LocationCategory, Recommendation, User } = require('../models/');

// get City Page - main

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// get categories 

router.get('/category/:city_id', async (req, res) => {
  try {
    const cityData = await Location.findByPk(req.params.id);
    const city = cityData.get({ plain: true })
    // city is available to pass along location_id
    res.render('category'), { city };
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all recommendations

router.get('/recommendations/:location-category_id', async (req, res) => {
  try {
    const categoryData = await LocationCategory.findByPk(req.params.id, {
      // include: [ { model: Location }, { model: Recommendation }]
    })

    res.json(categoryData)

  } catch (err) {
    res.status(500).json(err);
  }
})

 // This is a login and signup page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/add', (req, res) => {
  // if not logged in should redirect to login, cant request add without signing in
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  // whatever the name of the view will be
  res.render('addLocation');
});
module.exports = router;
