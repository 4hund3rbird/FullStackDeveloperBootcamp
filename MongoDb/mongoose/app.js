const mongoose=require('mongoose');
// const {Schema}=mongoose;
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://localhost:27017/moviesApp',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("connnection is open!!!");
    })
    .catch(err=>{
        console.log("Ohh sorrry some error is caught!!:(");
        console.log(err);
    });
// const db=mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'))
    
// db.once('open',()=>{
//     console.log('Connection established!!!');
// });

// const Movies_schema=new Schema({
//     title:String,
//     rating:Number,
//     release:{type:Date,default:Date.now},
//     actors:[{name:String}]
// });

// create a collection

// const movies=mongoose.model('movies',Movies_schema);
// const new_movie=new movies({title:'Avatar',rating:7,actors:['william kenrey','ryan rhodes']});
// new_movie.save().then(()=>{
//     console.log("movie successfully inserted :)");
// });

let s={
    title:String,
    score:Number,
    year:Number
}

var new_schema=new mongoose.Schema({
    title:String,
    score:Number,
    year:Number   
})

// let movie1=new new_Model({title:"Avatar",score:8.5,year:2023});
// movie1.score=10.0;
// movie1.save();
var data=mongoose.model('Mymovies',new_schema);
function insertData(){
    // new_Model.deleteMany({score:{$lt:10}});
    data.insertMany([
        {title:"Attack on Titan",score:"9.2",year:2003},
        {title:"Edge of tomorrow",score:"8.0",year:2019},
        {title:"Arrival",score:"7.6",year:2016},
        {title:"The Last Samurai",score:"8.5",year:2008},
        {title:"The Lord of the Ring:Return of the Kings",score:"9.7",year:2005},
        {title:"The Dark Knight",score:"9.5",year:2012}]
    ).then(()=>{
        console.log("Successfully inserted data to the database!!!");
    });
}

function retriveData(){
    data.find()
    .then((e)=>{
        console.log(e);
    });
    
}

function updateData(){
    data.updateOne({title:"Arrival"},{$set:{title:"The Godfather"}})
    .then(()=>{
        console.log("element successfully updated :)")
    });
}

function deleteData(){
    data.deleteOne({year:{$lt:2005}})
    .then(()=>{
        console.log("data is successfully deleted");
    });
}
deleteData();
retriveData();