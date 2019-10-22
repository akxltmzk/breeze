const mongoose = require('mongoose')

const PageSchema = new mongoose.Schema({
  pagename: String,
  contents: {
    content : {
      headerimagePath: String,
      galleries: [
        {
        name: String, 
        images:[
          {index : Number,
           path : String}
        ] 
      } 
      ]
  }}
}) 

const Page = mongoose.model('Page', PageSchema)

module.exports = Page