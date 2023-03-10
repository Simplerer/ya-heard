const router = require('express').Router();
const express = require('express');
const { Op } = require('sequelize');
const { Category, Location, LocationCategory, Recommendation, User } = require('../models/');



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
