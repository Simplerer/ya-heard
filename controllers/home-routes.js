const router = require('express').Router();
const express = require('express');
const { Category, Location, LocationCategory, Recommendation, User } = require('../models/');

// get City Page - main
router.use(express.static("images"));

router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll();
    const locations = locationData.map((location) =>
    location.get({ plain: true }));
    const imageList = [];
    imageList.push("locations/charlotte.png");
    imageList.push("locations/asheville.png");
    imageList.push("locations/ecuador.png");
    imageList.push("locations/france.png");
    res.render('location', { locations, imageList });
  } catch (err) {
    res.status(500).json(err);
  }
});


// get categories 

router.get('/category/:loc_id', async (req, res) => {
  try {
    const cityData = await Location.findByPk(req.params.id);
    const city = cityData.get({ plain: true })
    // city is available to pass along location_id
    res.render('category'), { city };
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/charlotte/:id', async (req, res) => {
  try{
    const recData = await Category.findByPk(1, {
      include: [
        {
          model: Recommendation,
          where: Recommendation.category_id = req.params.id,
          attributes: ['id', 'title', 'comment', 'user_id', 'location_id', 'category_id'],
        },
      ],
    });
    const recommendations = recData.map((rec) =>
    rec.get({ plain: true }));
    res.render('recommendations', {recommendations});
  } catch (err) {
    console.log(err);
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
      include: [{ 
          model: User,
          attributes: ['username'] }]
    });
     const recommendations = recomData.map((recommendation) =>
     recommendation.get({ plain: true }));
    res.render('recommendation', {recommendations})
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
