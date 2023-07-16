// console.log("Javascript practice")
// // let maxNum=prompt('Enter maximum number')
// // let target=Math.floor(Math.random()*maxNum)+1
// // let trys=0;
// // let msg='Enter the guess'
// // while(trys<=6){
// //     let guess=prompt(msg);
// //     if(guess>target+10 || guess<target-10){
// //         msg='You have went too far';
// //     }
// //     else if(guess>target+5 && guess<=target+10 || guess<target+5 && guess>=target-10){
// //         msg='You are close'
// //     }else{
// //         console.log('you win')
// //         break;
// //     }
    
// // }

// const add=function(x,y){
//     return x+y;
// }

// function calltwice(func){
//     func();
//     func();
// }

// function rolldie(){
//     let roll=Math.floor(Math.random()*6)+1;
//     // console.log(roll);
// }

// function calltentimes(func,x){
//     for(let i=0;i<x;i++){
//         func();
//     }
// }

// function makemystryfunc(){
//     let mystryno=Math.random();
//     if(mystryno>0.5){
//         return function(){
//             alert('congrats you win a thousand dollars')
//         }
//     }else{
//         return function(){
//             alert('Sorry but you have been infected by covid 2020220!!!')
//             alert('Sorry but you have been infected by covid 2020220!!!')
//             alert('Sorry but you have been infected by covid 2020220!!!')
//             alert('Sorry but you have been infected by covid 2020220!!!')
//             alert('Sorry but you have been infected by covid 2020220!!!')
//         }
//     }
// }

// function makebetween(x,y){
//     return function(num){
//         if(x<num && num<y){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// //----------------------------------------------------------------------------------------
// //Array Methods

// //1. for each
// let t=0;
// const arr=[0,23,43,2,4,3,2,5,6,77,64]
// function total(num){
//     t+=num;
// }

// arr.forEach(total)
// arr.forEach(function (n){
//     // console.log(n);
// })
// //----------------------------------------------------------------------------------------
// //2.map

// const arr1=[1,2,3,4,5,6,7,8,9,10];
// let dooubles=arr1.map(function(num){    return num*2})
// // console.log(dooubles)

// //----------------------------------------------------------------------------------------
// //arrow funcitons

// let add1=(x,y)=>{
//     return x+y;
// }
// //----------------------------------------------------------------------------------------
// //implicit return
// let square=(x)=>(x*x)
// let iseven=x=> x%2;
// //----------------------------------------------------------------------------------------
// let list=[
//     ['wakeup','eat','brush','sleep','study'],
//     [1,3,2,5,4]
// ]

// let todo=list[1].map(num=>{
//     return list[0][num-1]
// })

// // console.log(todo)
// //----------------------------------------------------------------------------------------

// let process={
//     'name':[],
//     'task':[]
// }

// let processSet=()=>{
//     let processName= prompt('Enter name of the process here')
//     let processTask=prompt('Enter process Task here')
//     process.name.push(processName);
//     process.task.push(processTask)
// }



// //----------------------------------------------------------------------------------------


 
// //         setTimeout(() => {
// //             console.log('hello world')
// //         }, 3000);    
    
// // let timer=()=>{

// //     const id=setInterval(()=>{
// //         console.log(Math.floor(Math.random()*20)+1)
// //     },1000)
// // }    

// // clearInterval(id);

// //----------------------------------------------------------------------------------------

// let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,15,16,17,18];
// let small=array.filter((x)=> x<=10)


// const movies=[
//     {
//         title:'Avatar',
//         score:88,
//     },
//     {
//         title:'The Dark Knight',
//         score:95,
//     },
//     {
//         title:'Jhon Wick',
//         score:70,
//     },
//     {
//         title:'Lord of the Rings',
//         score:94,
//     },
//     {
//         title:'Captain Marvel',
//         score:50,
//     }
// ]

// let goodMovies=movies.filter((x)=>x.score>=90)
// let averageMovies=movies.filter((x)=>x.score<90&&x.score>=60)
// let badMovies=movies.filter((x)=>x.score<60)
// //----------------------------------------------------------------------------------------
// let scores=[23,23,45,3,21,6,56,67,88]

// let smallerthan90 =scores.every((c)=>c<90)
// let equalto23=scores.some((x)=>x===23)

// //----------------------------------------------------------------------------------------

// // .reduce() method 

// let array_add=[12,23,12,11,23,2,4,5];


// let array_sum=array_add.reduce((x,y)=>x+y,0)

// console.log(array_sum)

// let array_max=[23,12,35,43,44,66];
// let max=array_max.reduce((current,newvalue)=>{
//     if(newvalue>current){
//         return newvalue;
//     }
//     return current
// })

// let min=array_max.reduce((current,newvalue)=>{
//     if(newvalue<current){
//         return newvalue;
//     }
//     return current
// })

// // default parameters
// function greet(name,msg="You filthy animal"){
//     console.log(`${msg}, ${name} !!`)
// }

// // array spread


// console.log(`   Maximum number of array :${array_max} is :${Math.max(...array_max)} and 
//                 Minimum number of array :${array_max} is :${Math.min(...array_max)}`)
// function sumall(...nums){ //++> rest parameters
//     return nums.reduce((s,t)=>s+t)
// }

// //destructuring arrays

// const score=[123123,234234,356,2342,67567,34234]

// const [topper,second,third,...remaining_all]=score

// Class list
// let butt=document.querySelectorAll('button')
// console.log(butt[0].classList)
// butt[0].classList.add('slide')
// for(let i of butt[0].classList){
//     console.log(i);}
    
//     butt[0].classList.toggle('slide')
//     console.log(butt[0].classList)

// let con=document.querySelector('input');
// con.parentElement.parentElement.parentElement.style.backgroundColor=
// 'lightgreen'
// con.previousElementSibling.style.width='100px';

// Adding elements to the parent 
const newimg=document.createElement('img');
newimg.src='https://images.unsplash.com/photo-1661474039567-9de2a29ef6df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
document.body.appendChild(newimg);
newimg.classList.add('shape')

const para=document.createElement('p');
para.append( "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla officia nesciunt tempore beatae ex laudantium tenetur? In totam aspernatur aliquam sapiente asperiores, est eveniet! Nulla quia id maxim" );
para.prepend("This is lorem epsum")
document.body.appendChild(para);

const title=document.createElement('h1');
title.append("This is awesome");
title.style.fontWeight='600';
para.insertAdjacentElement('beforebegin',title)

let b=document.createElement('b');
document.body.appendChild(b);
b.remove();
// b.parentElement.removeChild(b)

