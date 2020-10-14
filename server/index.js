const express = require('express')
const app = express()
const mongoose = require('mongoose')
const infoRoter = require('./router')
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use('/info',infoRoter)












app.listen(5000,()=>{
    console.log('i am from server')
})

mongoose.connect("mongodb://localhost/dbv2",{ useUnifiedTopology: true ,useNewUrlParser: true},(err)=>{
    if(!err){
        console.log('database conncet properly')
    }
})