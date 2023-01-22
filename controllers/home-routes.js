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

router.get('/recommendations/:id', async (req, res) => {
  try{
    const recomData = await Recommendation.findAll({
        where: {
            location_id: req.params.id
        },
        attributes: ['id', 'title', 'comment'],
      include: [{ 
          model: User,
          attributes: ['username'] }, 
          { 
              model: Location,
              attributes: ['location_name'] },
          { 
              model: Category,
              attributes: ['category_name'] }]
    
    });
    res.json(recomData)
    console.log(recomData)
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
