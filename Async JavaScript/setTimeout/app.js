let rainbow=['violet','indigo','blue','green','yellow','orange','red']

const back=document.body

// setTimeout(()=>{
//     back.style.backgroundColor='red';
    
// },2000)

// function changeClr(i){
//     setTimeout(()=>{
//         back.style.backgroundColor=rainbow[i-1];
//     },i*2000)

// }

//     for(i=1;i<=7;i++){
//         changeClr(i);
//     }

// function changebc(t,clr,nextclr){
//     setTimeout(()=>{
//         back.style.backgroundColor=clr;
//         nextclr && nextclr();
//     },t)
// }

// changebc(2000,'red',()=>{
//     changebc(4000,'blue',()=>{
//         changebc(6000,'green')
//     })
// })
fakerequest=()=>{
    console.log("Sending request to the server.....")
    setTimeout(function(){
        console.log("Here is your data from the server.....")
    },2000);
    console.log("Getting data was successful.....")
}


