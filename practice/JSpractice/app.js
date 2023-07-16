let size={
    "rows":23,"cols":50,"width":1000,"height":500,
    "element":{"width": 20,"height": 20,"border": 1}
        };
var zoom_count=0;
const strip=document.querySelector('.strip');
const zoom=document.querySelectorAll('.Zoom')

function Zoom(X=1){
    strip.childNodes[zoom_count].style.display='none';
    zoom_count++;
    size.element.width*=X;
    size.element.height*=X;
    size.rows=Math.floor((size.height/size.element.height));
    size.cols=Math.floor((size.width/size.element.width));
    createTable();
}
var i=1;

zoom[0].addEventListener('click',()=>{
    ++i;
    Zoom(i);
})

zoom[1].addEventListener('click',()=>{
    strip.childNodes[zoom_count].style.display='none';
    zoom_count--;
    strip.childNodes[zoom_count].style.display='block';
})



function createTable(){
    const table=document.createElement('section');
    for(let i=0;i<size.rows;i++){
        const row=document.createElement('div');
        for(let i=0;i<size.cols;i++){
            const block=document.createElement('span');
            block.style.width=`${size.element.width}px`;
            block.style.height=`${size.element.height}px`;
            block.style.border=`${size.element.border}px solid white`;
            row.appendChild(block);
        }
        table.appendChild(row);
    }
    strip.appendChild(table);
}

createTable();
