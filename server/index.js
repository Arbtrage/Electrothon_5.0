const express=require('express');
const app=express();
require('dotenv').config();
const morgan=require('morgan');
const auth=require('./routes/auth.route');
const user=require('./routes/user.route');

const connectDB=require('./services/connectDb');

app.use(express.json());


connectDB();
const port=process.env.PORT || 5000;

app.use('/api',auth);
app.use('/api',user);
app.use(morgan('dev'));

// app.get('/',(req,res)=>{
//     res.status(200).json({message:"Server running successfully...."});
// })


app.listen(port,()=>{
    console.log(`Server running on port ${port}.....`)
})