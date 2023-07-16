//XHR way to fetch data

let apiurl="https://catfact.ninja/facts";
let apiurl2="https://icanhazdadjoke.com/";

function XMLHttpRequest_way()
{
    const request=new XMLHttpRequest();

    request.onload=function(){
    // console.log("success");
    // console.log(this);
    const apidata=JSON.parse(this.responseText);
    // console.log(apidata);
    for(let i of apidata.data){
        // console.log(i.fact);
    }
    }
    request.onerror=function(){
    // console.log("Error");
}

request.open("GET",apiurl);
request.send();
}
// Fetch way to call data
function fetchway()
{
    fetch(apiurl)       // returns a promise
    .then(res=>{    //if promise is resolved
        console.log("success");
        return res.json()      //returns a promise
    })
    .then(res=>{
        for(let i of res.data){
            console.log(i.fact);
        };
    })
    .catch(err=>{
        console.log("error",err);
    })
}

const getdata= async ()=>{
    let res=await fetch(apiurl);
    let data=await res.json();
    for(let i of data.data){
        console.log(i.fact);
    };
}

//Axios is a library for making https requests through js

// axios.get(apiurl)
//     .then(res=>{
//         console.log(res.data);
//     })
//     .catch(err=>{
//         console.log("error",err);
//     })
var count=0;

const geturls =async ()=>{
    try
    {
        const res=await axios.get(apiurl);
        for(let i of res.data.links){
            if(i.url!==null){getdata_axios(i.url);}
            }
    }
    catch(e){
        console.log("error",e)
    }
}

const getdata_axios=async (url)=>{
    let res= await axios.get(url);
    // console.log(res);
    for(let i of res.data.data){
        console.log(`${count})\n ${i.fact}`)
        count+=1;
    }
}
// geturls();

const getjokes=async ()=>{
    try{    const config={headers:{Accept:'application/json'}}   // used to set headers
        let res=await axios.get(apiurl2,config);
        return res.data.joke;}
    catch(e){
        return "Sorry No Jokes are Available";
    }
}


const addnewjoke=async()=>{
    let joketxt=await getjokes();
    let joke=document.createElement('li');
    joke.innerText=joketxt;
    document.getElementById('list').appendChild(joke);
}

const trigger=document.getElementById('trigger');
trigger.addEventListener('click',addnewjoke);

