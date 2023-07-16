const Product=require('./models/products')
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

seedProducts=[
    {
        name:'dahi',
        price:30,
        category:'dairy'
    },
    {
        name:'apple',
        price:35,
        category:'fruit'
    },
    {
        name:'lemon',
        price:5,
        category:'vegetable'
    },
    {
        name:'paneer',
        price:140,
        category:'dairy'
    },
    {
        name:'cucumber',
        price:15,
        category:'vegetable'
    },
]
// const p=new Product({
//     name:'bannana',
//     price:30,
//     category:'fruit'
// });

// p.save().then(
//     p=>{
//         console.log(p);
//     }
// );

Product.insertMany(seedProducts).then(
    p=>{
        console.log(p);
    }
)