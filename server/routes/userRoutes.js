const  {signup,login,logout}  = require('../controller/auth')
const getUserProfile =require('../controller/userController')
const secureRoutes = require('../middleware/secureRoutes')
const router = require('express').Router()



router.post('/signup' , signup)
router.post('/login',login)
router.post('/logout',logout);
router.get('/getUserProfile',secureRoutes,getUserProfile)
module.exports  = router