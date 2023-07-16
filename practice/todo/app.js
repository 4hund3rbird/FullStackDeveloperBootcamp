const form=document.getElementById('form');
const list=document.getElementById('list');
const check=document.querySelectorAll('li input');

let add=function(e){
        let l=document.createElement('li')
        let t=document.createElement('h3')
        let c=document.createElement('button')
        c.innerText="done";
        t.innerText=e;
        c.addEventListener('click',function(ev){
            
            t.classList.add('done');
            // document.getElementById('board').removeChild(l)
           
            
        })
        l.appendChild(t);
        l.appendChild(c);
        document.getElementById('board').appendChild(l)

}

form.addEventListener('submit',function(evt){
    evt.preventDefault();
    let tasks=list.value.split(',');
    list.value="";
    tasks.forEach((e)=>{
        add(e);
    })
})
