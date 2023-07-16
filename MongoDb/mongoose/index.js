const val=require('./validation')
console.log(val);

const database="School";
const collection="Students";
const schema={
    name:{
        type:String,
        required:true
    },
    age:Number,
    subjects:[String]
}

let m1=new val(database,schema,collection);
console.log(m1);
// m1.Model.insertMany([{name:"Aniket",age:20,subjects:['Maths','Science','English']},
//                     {name:"Rahul",age:20,subjects:['Economics','Science','English']}
//                     ])
//                     .then(()=>{
//                        console.log("elements succssfully inserted");
//                     });

m1.Model.find().then((e)=>{
    console.log(e);
})


