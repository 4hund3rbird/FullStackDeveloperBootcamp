// demo_fake_request_using_callback_hell
callback_hell=function(){
    fake_request=function(url,success,failure){
        const delay=Math.floor(Math.random()*4500)+500;
        setTimeout(()=>{
            if(delay>=3000){
                failure("Sorry data can't be loaded :(");
            }else{
                success(`Heres your data from the ${url}`);
            }
        },delay)
    }

    fake_request("bookmyshow.com/page1",
        function success(msg){
            console.log("Success!!")
            console.log(msg);
            fake_request("bookmyshow.com/page2",
            function success(msg){
                console.log("2nd request Success!!")
                console.log(msg);
                fake_request("bookmyshow.com/page3",
                function success(msg){
                    console.log("3rd request Success!!")
                    console.log(msg);
                },
                function error(msg){
                    console.log("3rd request error!!")
                    console.log(msg);
                })
            },
            function error(msg){
                console.log("2nd request error!!")
                console.log(msg);
            })
        },
        function error(msg){
            console.log("Faliure!!")
            console.log(msg);
        })
};

// A Promise is an object representing eventual completion and failure of an
// asynchronous operation.

// .then is used for after resolve
// .catch is used after reject  
fake_promises=function()
{    let fake_request_promise=(url)=>{
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

    // fake_request_promise('bookmyshow.com/page1')
    //     .then(()=>{
    //         console.log('p1 It worked!!!');
    //         fake_request_promise('bookmyshow.com/page2')
    //             .then(()=>{
    //                 console.log('p2 It worked!!!');
    //                 fake_request_promise('bookmyshow.com/page3')
    //                     .then(()=>{
    //                         console.log('p3 It worked!!!');
    //                     })
    //                     .catch(()=>{
    //                         console.log('p3 connection lost :(');
    //                     })
    //             })
    //             .catch(()=>{
    //                 console.log('p2 connection lost :(');
    //             })
    //     })
    //     .catch(()=>{
    //         console.log('p1 connection lost :(');
    //     })

    fake_request_promise('bookmyshow.com/page1')
        .then(()=>{
            console.log('p1 It worked!!!');
            return fake_request_promise('bookmyshow.com/page2');
        })
        .then(()=>{
            console.log('p2 It worked!!!');
            return fake_request_promise('bookmyshow.com/page3');
        })
        .then(()=>{
            console.log('p3 It worked!!!');
        })
        .catch(()=>{
            console.log('connection lost :(');
        })
    }

// Making our own promises

const bc_change=(color,delay)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay)
    })
}


bc_change('red',1000)
    .then(()=> bc_change('orange',1000))
    .then(()=> bc_change('green',1000))
    .then(()=> bc_change('blue',1000))
    .then(()=> bc_change('violet',1000))
    .then(()=> bc_change('pink',1000))
    .then(()=> bc_change('black',1000))
    .then(()=> bc_change('grey',1000))
