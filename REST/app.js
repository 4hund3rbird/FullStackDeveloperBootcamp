const express=require('express');
const app=express();
const path=require('path');
const {v4:uuid}=require('uuid');
// const Id=require('uuid');
const port=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.set(express.static(__dirname+'/styles'));

/*

COMMENTS CRUD ROUTE
    -id:comment
    -/comments
    
    -GET/comments -> Show all comments
    -GET/comments/:id  -> Show particular comment
    -POST/comments/:id -> Create the comment with given id
    -Patch/comments/:id -> Update the particular comment with id
    -DELETE/comments/:id -> Delete the comment with particular id

*/

comments=[
    {   
        "id":uuid(),
        "username":"4hsnforevr",
        "comment":"HI I am feeling great today :)"
    },
    {   
        "id":uuid(),
        "username":"peppin23",
        "comment":"How can no one give me likes except you <3"
    },
    {
        "id":uuid(),
        "username":"eewriio123",
        "comment":"Today is our national day , so I congragulate on your behalf."
    },
    {
        "id":uuid(),
        "username":"naughty4merica",
        "comment":"Do you want some then come o==3"
    },
    {
        "id":uuid(),
        "username":"laddli222",
        "comment":"What is the ans of 2+2, for me it's 22 ;)"
    },
]



app.post('/comments',(req,res)=>{
    console.log(req.body);
    const { usr ,cmnt}=req.body;
    comments.push({username:usr,comment:cmnt});
    res.redirect('/comments')
});
app.get('/comments',(req,res)=>{
    res.render('allcomments/index.ejs',{ comments});

});

app.get('/comments/new',(req,res)=>{
    res.render('allcomments/new.ejs');
})

app.get('/comments/:id',(req,res)=>{
   let {id}=req.params;
   console.log(id);
   let comment=""
   for(i of comments){if(i.id===id){comment=i;console.log(comment)};break;};
   console.log(comments);
   res.render('allcomments/comment.ejs',{comment});
    
})


// console.log(Id.v4());
app.listen(port,()=>{
    console.log("Listening on port",port);
})




// app.get("/vadapav",(req,res)=>{
//     const {order,qty}=req.query;
//     res.send(`Ok Here's Your order for ${qty} ${order} via GET.`);
// })

// app.post("/vadapav",(req,res)=>{
//     const {order,qty}=req.body;
//     res.send(`Ok Here's Your order for ${qty} ${order} via POST.`);
// })