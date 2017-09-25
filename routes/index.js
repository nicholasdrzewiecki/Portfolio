const express = require('express');
const router = express.Router();

router.get('/', function(request, response, next) {
  return response.render('index', {
    title: 'Home',
    header: 'Nicholas'
  });
});

router.get('/about', function(request, response, next) {
  return response.render('about', {
    title: 'About',
    header: 'About'
  });
});

module.exports = router;
