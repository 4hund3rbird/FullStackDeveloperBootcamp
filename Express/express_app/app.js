const express=require('express');
const app=express();
const port=3000;

app.listen(port,()=>{
    console.log(`listing on port : ${port}`)
})

// app.get('/',(req,res)=>{
//     res.send('Hello world');
// })

// app.use((req,res)=>{
//     // console.log(req)
//     // console.log(res)
//     if(req.path=='/alert'){
//         res.send('<h1 style="color:red; background-color:black">this is a problem</h1>')
//     }else{
//         res.send('Hello server is running')
//     }
//     console.log("Hey we got a new request!!!")
// })

app.get('/',(req,res)=>{
    res.send("Hello fellow traveler what are you seeking for? hahaha!")
})
app.get('/quest',(req,res)=>{
    res.send("Ohh you want a quest but you are nothing but a noob for such a job moth1**** !!!")
})
app.get('/search',(req,res)=>{
    res.send(`Ohh you want to search about ${req.query.q} you little cu*t`);
})

// app.get('/r/:subreddit',(req,res)=>{

//     let subreddit=req.path.slice(3);
//     res.send(`Welcome to  ${subreddit} subreddit`)
// })

app.get('/r/:subreddit/:postid',(req,res)=>{
    const {postid,subreddit}=req.params;
    console.log(postid,subreddit)
    res.send(`${subreddit},${postid}`);
});


