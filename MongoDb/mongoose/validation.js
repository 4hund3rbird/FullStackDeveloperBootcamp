const { default: mongoose } = require('mongoose');

class Validation{
    constructor(database,schema,collection){
        this.database=database;
        this.schema=schema;
        this.collection=collection;
        this.connect();
        // this.Model();
        this.Model=mongoose.model(`${this.collection}`,this.schema);
    }

    connect(){
        const mongoose=require('mongoose');
        mongoose.set('strictQuery',false);

        const database=this.database;

        mongoose.connect(`mongodb://localhost:27017/${database}`,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{console.log("connnection is open!!!");})
        .catch(err=>{
        console.log("Ohh sorrry some error is caught!!:(");
        console.log(err);
        });

    }
    close(){
        mongoose.connection.close();
    }
    
    
}
module.exports=Validation;


