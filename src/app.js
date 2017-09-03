'use strict'

const express = require('express');
const app = express();
const routes = require('./routes/index');
const http = require('http').Server(app);


//setup pug templates
app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', routes);

http.listen(3000, () => {
  console.log("server running on port 3000")
});
