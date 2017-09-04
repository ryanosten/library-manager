'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('book_detail');
});

module.exports = router;
