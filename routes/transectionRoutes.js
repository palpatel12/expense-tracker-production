const express=require('express')
const { addTransection, getAllTransection,editTransection,deleteTransection } = require('../controllers/transController')


//router object
const router=express.Router()

//routes
//add transection Post method
router.post("/add-transection",addTransection);

//edit transection Post method
router.post("/edit-transection",editTransection);

//delete transection Post method
router.post("/delete-transection",deleteTransection);

//get transection
router.post("/get-transection",getAllTransection);

module.exports=router