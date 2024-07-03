const express=require('express')
const { loginContoller, registerController } = require('../controllers/userController')

//router object
const router=express.Router()

//routers
//POST || LOGIN
router.post('/login',loginContoller)

//POST || REGISTER USER
router.post('/register',registerController)

module.exports=router