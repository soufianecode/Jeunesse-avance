const express = require('express');
let router = express.Router();

const homeController=require('./controllers/homeController');
const teamController=require('./controllers/teamController');
const activitiesController=require('./controllers/activitiesController');
const contactController=require('./controllers/contactController');
const calendarController=require('./controllers/calendarController');

// Take the right controller with the fonction needed
router.get('/', homeController.display );
router.get('/home', homeController.display );
router.get('/team', teamController.display );
router.get('/calendar', calendarController.display );
router.get('/activities', activitiesController.display );
router.get('/contact', contactController.display );

module.exports = router;