const router = require('express').Router();
const { Recommendation, Category, User, Location } = require('../../models');


// get all for checking recoms

router.get('/', async (req, res) => {
    try{
      const recomData = await Recommendation.findAll({
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
    } catch (err) {
      res.status(500).json(err);
    }
  
  })

  //get by user

  router.get('/:id', async (req, res) => {
    console.log('PRE --', req.params)
    try{
      const recomData = await Recommendation.findAll({
          where: {
              user_id: req.params.id
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
  
  });

// get all by category

  router.get('/categories/:id', async (req, res) => {
    console.log('PRE --', req.params)
    try{
      const recomData = await Recommendation.findAll({
          where: {
              category_id: req.params.id
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
  
  });

// get all by location

  router.get('/locations/:id', async (req, res) => {
    console.log('PRE --', req.params)
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
  
  });

  router.post('/', async (req, res) => {
    try {
      const recomData = await Recommendation.create(req.body);
    res.json(recomData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const recomData = await Recommendation.update({
        title: req.body.title,
        comment: req.body.comment,      
      },
      {
        where: { id: req.params.id }
      },
      )
      res.json(recomData);
    } catch (err) {
      console.error(err);
      res.json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
        const recomData = await Recommendation.destroy({
            where: { id: req.params.id }
        }) 
        res.json(recomData);
    } catch (err) {
        res.status(500).json(err)
    }
  })
  

module.exports = router;