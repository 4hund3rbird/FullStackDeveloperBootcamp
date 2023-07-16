const mongoose=require('mongoose');
const {Schema}=mongoose;
const productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    category:{
        type:String,
        enum:['fruit','vegetable','dairy']
    }
})

const Product=mongoose.model('Product',productSchema);
module.exports=Product;