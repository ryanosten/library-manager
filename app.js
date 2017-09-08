'use strict'

const express = require('express');
const app = express();
const http = require('http').Server(app);
const models = require('./models');

const routes = require('./routes/index');
const books = require('./routes/books');


//setup pug templates
app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', routes);
app.use('/books', books);

models.sequelize.sync().then(function() {
  http.listen(3000, () => {
    console.log("server running on port 3000")
  });
});
