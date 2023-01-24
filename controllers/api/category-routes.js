const router = require('express').Router();
const express = require('express');
const { Recommendation, Category, User, Location } = require('../../models');

router.use(express.static("images"));

router.get('/Charlotte', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
    category.get({ plain: true }));
    const images = [];
    imageList.push("images/categories/arts.png");
    imageList.push("images/categories/foodandbev.png");
    imageList.push("images/categories/services.png");
    imageList.push("images/categories/shopping.png");
    res.render('category-Charlotte', { categories, images });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/Asheville', async (req, res) => {
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


router.get('/Paris', async (req, res) => {
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

router.get('/Banos', async (req, res) => {
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

module.exports = router;