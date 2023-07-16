const fs = require('fs');
const p=process.argv[2] || 'Project';
// fs.mkdir(p,{recursive:true},(err)=>{
//     // console.log(err);
//     if(err) throw err;
//     console.log('dircreated');
// })  -----------async

// fs.mkdirSync(p);
fs.writeFileSync(file='index.html');
// fs.writeFileSync(`${p}/style.css`);
// fs.writeFileSync(`${p}/app.js`);