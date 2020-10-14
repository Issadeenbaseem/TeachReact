const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({

         Name:{
             type:String,
             required:true,
             trim:true
         },
         Age:{
             type:Number,
             required:true,

         },
         City:{
              type:String,
              required:true
         }
})

module.exports = mongoose.model('info',infoSchema)