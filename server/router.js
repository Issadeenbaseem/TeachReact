const express = require('express')

const router = express.Router() 

const userSchema = require('./UserSchema')
const { findByIdAndRemove } = require('./UserSchema')

//create
router.post('/' ,async(req,res) =>{

    console.log(req.body)

    const data = new userSchema({
        
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City

    })
    await data.save()

    res.json(data)
    

})

//get
 router.get('/' ,async (req,res) =>{
     const findData = await userSchema.find();
     
     res.json(findData)
 })
 
 //delete
 router.delete('/delete/:id',async(req,res)=>{
     const delData = await userSchema.findByIdAndRemove(req.params.id).then (e =>{
         res.json({
             message:'delete Successfully'
         })
     })
 })

 //update
 router.put('/update' ,async (req,res) =>{
     var update = await userSchema.update({_id:req.body._id},{$set:{
          
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City

     }
    })
    res.json(update)

 })










module.exports=router