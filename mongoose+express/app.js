const express=require('express');
const app=express();
const path=require('path');
const Product=require('./models/products');


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

const mongoose=require('mongoose');
// mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/newcrud',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("connnection is open!!!");
    })
    .catch(err=>{
        console.log("Ohh sorrry some error is caught!!:(");
        console.log(err);
    });


app.get('/products',async (req,res)=>{

    const products=await Product.find({}) //because it takes time to find and fetch the data from the database.
    res.render('products/index',{products})
})

app.get('/products/:id', async (req,res)=>{
    const {id}=req.params;
    console.log(id);
    const showproduct=await Product.findById(id);
    console.log(showproduct);
    res.render('products/details',{'products':showproduct});
})
app.listen(3000,()=>{
    console.log(
        "listening on port 3000!"
    );
})