const express = require('express');
const router = express.Router();

router.get('/', function(request, response, next) {
  return response.render('index', {
    title: 'Home',
    header: 'Nicholas'
  });
});

module.exports = router;
