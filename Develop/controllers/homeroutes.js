const router = require('express').Router();
const { Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll()
    const projects = projectData.map(project => project.get({plain:true}))

    res.render('homepage', {projects});
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
