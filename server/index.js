const express=require('express');
const app=express();
require('dotenv').config();
const morgan=require('morgan');


const port=process.env.PORT || 5000;

// app.use(morgan);

app.get('/',(req,res)=>{
    res.status(200).json({message:"Server running successfully...."});
})


app.listen(port,()=>{
    console.log(`Server running on port ${port}.....`)
})