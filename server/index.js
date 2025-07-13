const express = require('express')
const { mongoose } = require('mongoose')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

    mongoose.connect(process.env.MONGO_URL)
    .then((res)=>console.log('> Connected...'))
    .catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}` ))
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))