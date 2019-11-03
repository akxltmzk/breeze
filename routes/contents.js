const express = require('express');
const router = express.Router();
const Page = require('../models/page')
const _ = require('lodash')

// ------------------------ intropage route ----------------------------//

router.get('/', (req, res)=> {
  res.render('about')
})

module.exports = router;
