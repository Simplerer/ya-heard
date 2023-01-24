const router = require('express').Router();
const express = require('express');
const { Op } = require('sequelize');
const { Category, Location, LocationCategory, Recommendation, User } = require('../models/');

router.use(express.static("images"));
router.use(express.static("images/categories"));

// get City Page - main

router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll();
    const locations = locationData.map((location) =>
    location.get({ plain: true }));
    const imageList = [];
    imageList.push("locations/charlotte.png");
    imageList.push("locations/asheville.png");
    imageList.push("locations/france.png");
    imageList.push("locations/ecuador.png");
    res.render('location', { locations, imageList });
  } catch (err) {
    res.status(500).json(err);
  }
});


// get categories by city

router.get('/location/Charlotte', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
    category.get({ plain: true }));
    const imageList = [];
    imageList.push("arts.png");
    imageList.push("foodandbev.png");
    imageList.push("services.png");
    imageList.push("shopping.png");
    res.render('category-Charlotte', { categories, imageList });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/location/Asheville', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
    category.get({ plain: true }));
    const imageList = [];
    imageList.push("locations/arts.png");
    imageList.push("locations/foodandbev.png");
    imageList.push("locations/services.png");
    imageList.push("locations/shopping.png");
    res.render('category-Asheville', { categories, imageList });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/location/Paris', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
    category.get({ plain: true }));
    const imageList = [];
    imageList.push("locations/arts.png");
    imageList.push("locations/foodandbev.png");
    imageList.push("locations/services.png");
    imageList.push("locations/shopping.png");
    res.render('category-Paris', { categories, imageList });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/location/Banos', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
    category.get({ plain: true }));
    const imageList = [];
    imageList.push("locations/arts.png");
    imageList.push("locations/foodandbev.png");
    imageList.push("locations/services.png");
    imageList.push("locations/shopping.png");
    res.render('category-Banos', { categories, imageList });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Recomenndation for a specific category/location combo

router.get('/location/:city/category/:category', async (req, res) => {
  try{
    const recData = await Location.findOne({
      where: {
        location_name: {
          [Op.like]: `%${req.params.city}%`
        }
      },
      include: [ {
         model: Category,
         where: {
           category_key: {
            [Op.like]: `%${req.params.category}%`
          },
         },
        include: [{ 
          model: Recommendation,
          include: [User],
          where: {
            location_id: {
              [Op.col]: 'location.id'
            }
          },
          include: [{ model: User }]
          
         }]
      }]
    });
    const location = recData.get({ plain: true });
    res.render('recommendations', {location});
    // res.json(recData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all recommendations for a location

// router.get('/recommendations/:id', async (req, res) => {
//   try{
//     const recomData = await Recommendation.findAll({
//         where: {
//             location_id: req.params.id
//         },
//       include: [{ 
//           model: User,
//           attributes: ['username'] }]
//     });
//      const recommendations = recomData.map((recommendation) =>
//      recommendation.get({ plain: true }));
//     res.render('recommendation', {recommendations})
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })


 // This is a login and signup page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// add a review, links from anywhere
router.get('/addreview', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('addreview');
});

// add a city request page
router.get('/add', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  res.render('addlocation');
});

//temporary route to try add review until we have the real recomendation route
router.get('/recommendation', (req, res) => {

  res.render('recommendations');
});

module.exports = router;
