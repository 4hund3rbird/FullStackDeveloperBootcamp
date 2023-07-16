
let createbutton=()=>{
    const btn=document.createElement('button');
    btn.innerText="ClickME!";
    document.body.appendChild(btn);
    btn.addEventListener('mouseenter',makerx);
    }

function makerx(){
    this.style.backgroundColor=rx();
    this.style.color=rx();
}

let createtxt=()=>{
    const txt=document.createElement('h1');
    txt.innerText="click me!";
    txt.addEventListener('mouseenter',makerx)
    document.body.appendChild(txt);
}
let rx=()=>{
    let x=Math.ceil(Math.random()*255);
    let y=Math.ceil(Math.random()*255);
    let z=Math.ceil(Math.random()*255);
    return `rgb(${x},${y},${z})`}



for(let i=0;i<36;i++){
    createbutton();
}
for(let i=0;i<36;i++){
    createtxt();
}

