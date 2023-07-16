// async keyword makes any function return promise
// if the function returns a value the the promise is resolved and if we throw 
// an error the promise is rejected

// async function sing(){
//     throw 'this is a error';
//     return 'la la la'
// }

// sing()
// .then((data)=>{
//     console.log('this is resolved');
//     console.log(data);
//     })
// .catch((data)=>{
//     console.log('this is rejected');
//     console.log(data);
// })

// const login= async (user,pass)=>{
//     if(!user || !pass) throw 'Something is Missing';
//     if(pass==='cute') return 'WELCOME!';
//     throw 'Invalid Credentials'
// };

// login('aniket','dlkfj')
// .then(msg => console.log(msg))
// .catch(err => console.log(err))

const bc_change=(color,delay)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay)
    })
}

// await keyword waits till the promise is resolved

const make_rainbow=async function(){
    await bc_change('orange',1000);
    await bc_change('red',1000);
    await bc_change('blue',1000);
    await bc_change('green',1000);
    return 'all done';
}

let process=async ()=>{
    let msg=await make_rainbow();
    console.log(msg);
}

// bc_change('red',1000)
//     .then(()=> bc_change('orange',1000))
//     .then(()=> bc_change('green',1000))
//     .then(()=> bc_change('blue',1000))
//     .then(()=> bc_change('violet',1000))
//     .then(()=> bc_change('pink',1000))
//     .then(()=> bc_change('black',1000))
//     .then(()=> bc_change('grey',1000))

let fake_request_promise=(url)=>{
    return new Promise((resolve, reject) => {
        const delay=Math.floor(Math.random()*4000)+500;
        setTimeout(()=>{
            if(delay>=4000){
                reject('connection timmed out :(');
            }else{
                resolve(`heres your data from ${url}`);
            }
        },delay)
    })
}

//try and catch is used for error handeling in js
const make_requests=async ()=>{
    try
    {
        await fake_request_promise('page1');
        console.log("Done !!!")
    }
    catch(e)
    {
        console.log('Errror',e);
    }

}