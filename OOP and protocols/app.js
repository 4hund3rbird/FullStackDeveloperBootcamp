    // prototype is like an template for the object it is associated with.
// it contains all the methods and properties of the object 
// for eg.

import Car from "./car.mjs"

let c=new Car();

let name="aniket balasaheb kshirsagar";
String.prototype.greet=function(){      // here we added a new method to the prototype 
                                        //of string which can be called on any string
    return `Good morning Mr.${this}`;
    // console.log(this);
}
console.dir(String.prototype);

// factory function

function makecolor(r,g,b){ //factory function

    color={};
    color.r=r;
    color.g=g;
    color.b=b;
    color.read=function(){
        // console.log(this);
    }
    color.rgb=function(){
        const {r,g,b}=this;
        return `rgb(${r},${g},${b})`;
    }
    return color;
};

function getname(a,b){
    this.firstname=a;
    this.lastname=b;
}
getname.prototype.greet=function(){
    console.log(this.firstname,this.lastname);
};

let n=new getname('Aniket','Kshirsagar');

//the new keyword before any function makes it a constructor and 
//returns the object for the variable

let class1={
    name:'aniket',
    greet:function(){
        console.log('hello');
    }
}


let student=function(name,age,std,marks){
    this.name=name;
    this.age=age;
    this.std=std;
    this.marks=marks;
}

student.prototype.getdetails=function(){
    console.log(this.name,this.age,this.std,this.marks)
}

let names=['Aniket','Shreyash','Devang','Pranav','Abrar','Suraj'];
let students=[];


// for(let i=0;i<names.length;i++){

//     marks=Math.floor((Math.random()*90)+10);
//     // console.log(marks);
//     let st=new student(names[i],20,'TE',marks);
//     students[i]=st;
//     st.getdetails();
// }

// for(let i of students){
//     // console.log(i.name,i.marks);
// }

class st{
    constructor(name,age,rollcall){
        this.name=name;
        this.age=age;
        this.rollcall=rollcall;
        this.nvme();
        students.push(this);
    };
    nvme(){
        console.log(this.name,this.age,this.rollcall);
    };
};

class pet{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(this.name,'is eating!!!');
    }
}

class cat extends pet{
    constructor(name,age,livesleft=9){
        super(name,age);
        this.livesleft=livesleft;
    }
    meow(){
        console.log(this.name,'meow!!!');
    }
}
class dog extends pet{
    bark(){
        console.log(this.name,'Hoof Hoof!!!');
    }
}