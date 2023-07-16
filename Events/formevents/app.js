const form=document.querySelector('form')
const list=document.getElementById('list')
const inp=document.querySelector('input');

inp.addEventListener('input',function(e){
    console.log(e)
    document.querySelector('h1').innerText=inp.value;
})


// input and change are used as flag
//input is called every time something is entered inside the input box
//chage is called if the input area is blured - focused away
form.addEventListener('submit',function(evt){
    evt.preventDefault();
    let li=document.createElement('li')
    li.innerText=evt.srcElement[0].value;
    list.appendChild(li);
    evt.srcElement[0].value="";
})


