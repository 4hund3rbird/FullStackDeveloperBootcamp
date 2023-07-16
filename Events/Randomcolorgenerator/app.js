const btn=document.getElementById('btn');
const txt=document.getElementById('txt');
let rx=()=>{
    let x=Math.ceil(Math.random()*255);
    let y=Math.ceil(Math.random()*255);
    let z=Math.ceil(Math.random()*255);
    return `rgb(${x},${y},${z})`}

btn.addEventListener('click',()=>{
    document.body.style.backgroundColor=rx();
    txt.innerText=rx();
})