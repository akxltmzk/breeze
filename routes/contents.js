const express = require('express');
const router = express.Router();
const Page = require('../models/page')
const _ = require('lodash')

// ------------------------ intropage route ----------------------------//

router.get('/', function(req, res) {
  Page.find({},(err,page)=>{
    let gallerypaths = page[0].contents.content.galleries[0].images 
    res.render('intro', {gallerypaths: gallerypaths})     
  })
})

router.get('/home', function(req, res) {
  Page.find({},(err,page)=>{
    let gallerypaths = page[0].contents.content.galleries[0].images
   
    // arrangy by index
    gallerypaths =  _.sortBy(gallerypaths,'index')

    res.render('intro', {gallerypaths: gallerypaths})     
  })
})

// ------------------------ about route ----------------------------//

router.get('/about', function(req, res) {
  Page.find({},(err,page)=>{
    let headerimagePath = page[1].contents.content.headerimagePath
    res.render('about', {headerimagePath: headerimagePath})     
  })
})

// ------------------------ portfolio route ------------------------//

router.get('/portfolio', function(req, res) {
  Page.find({},(err,page)=>{
    let gallerypaths = page[2].contents.content.galleries
    res.render('portfolio', {gallerypaths: gallerypaths})  
  })
})

module.exports = router;
