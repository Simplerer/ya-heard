const router = require('express').Router();
const express = require('express');
const { Category } = require('../models');

router.get('/:city', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    const categories = categoryData.map((category) =>
    category.get({ plain: true }));
    const images = [
      'categories/arts.png',
      'categories/foodandbev.png',
      'categories/services.png',
      'categories/shopping.png'
    ];
    res.render('category', { categories, city: req.params.city, images });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;