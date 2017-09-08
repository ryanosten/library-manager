'use strict'
var express = require('express');
var router = express.Router();
var Book = require('../models').Book;

router.get('/', (req, res) => {
  Book.findAll().then(books =>{
    console.log(books);
    res.render('all_books');
  })
});

module.exports = router;
