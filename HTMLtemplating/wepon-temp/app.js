const express=require('express');
const app=express();
const path=require('path');
const demigods_data=require('./data.json');



app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'ui')));
app.set('views',path.join(__dirname,'/htmltemp'));


app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

link=['margit','godrik','rennela','radahn']

app.get('/:demigod',(rq,rs)=>{
    const { demigod }=rq.params;
    // console.log();
    rs.render('demigods.ejs',{"tag":demigod,"bio":demigods_data[demigod]})
    // console.log(demigod);
})

// app.get(`/${link[0]}`,(req,res)=>{
//     res.render('demigods.ejs',{demigod:link[0]})
// })
// app.get(`/${link[1]}`,(req,res)=>{
//     res.render('demigods.ejs',{demigod:link[1]})
// })
// app.get(`/${link[2]}`,(req,res)=>{
//     res.render('demigods.ejs',{demigod:link[2]})
// })
// app.get(`/${link[3]}`,(req,res)=>{
//     res.render('demigods.ejs',{demigod:link[3]})
// })

// for(let i of links){
//     app.get(link[i],(req,res)=>{
//         res.render('demigods.ejs',{demigod:link[i]});
//     })
// }

