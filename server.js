const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', routes);

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});
