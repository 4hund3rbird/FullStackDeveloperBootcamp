const butt=document.getElementById('#btn');
const text=document.getElementsByTagName('h1')


butt.onmouseenter=function(){
    text[0].innerText="Hey did you just hover!!!!"
    text[0].style.color="blue"
}
butt.onmouseleave=function(){
    text[0].style.color="black"
    text[0].innerText="Events!!!"
}
const btn2=document.getElementById('btn2');
btn2.addEventListener('mouseenter',()=>{
    alert("Hey can I help you?")
},{once:true})