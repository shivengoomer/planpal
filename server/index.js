const express = require('express')
const cors = require('cors');
const { mongoose } = require('mongoose')
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
const app = express()
require('dotenv').config()
app.use(cors({
 origin: "http://localhost:5173",
  credentials: true,// Allow these headers
}));
app.use(cookieParser());
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