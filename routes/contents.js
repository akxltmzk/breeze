const express = require('express');
const router = express.Router();
const Page = require('../models/page')
const _ = require('lodash')

// ------------------------ intropage route ----------------------------//

router.get('/', function(req, res) {
  res.render('intro')
})

module.exports = router;
