const express = require('express')
const cors = require('cors');
const { mongoose } = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const app = express()
require('dotenv').config()
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));

app.use(express.json());

const port = process.env.PORT || 5000
    mongoose.connect(process.env.MONGO_URL)
    .then((res)=>console.log('> Connected...'))
    .catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}` ))
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})
app.use("/user",userRoutes);

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))