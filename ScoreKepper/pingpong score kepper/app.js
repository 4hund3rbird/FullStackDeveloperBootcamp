const p1score=document.querySelector('#player1')
const p2score=document.querySelector('#player2')
const p1inc=document.querySelector('#p1')
const p2inc=document.querySelector('#p2')
const reset=document.querySelector('#reset')
const playto=document.querySelector('#playto');

var win=1;
var gameover=false;
var winner='';

let limit=function(s){
    if(s===win){
        return true;
    }else{
        return false;
    }
}

let increment=function(e){
    if(!gameover){
        let score=parseInt(e.innerText);
        
        ++score;
        e.innerText=`${score}`;
    }
    
}

let iswinnner=function(w){
    if(limit(w)){
        // p1inc.disabled='true';
        // p2inc.disabled='true';
        gameover=true;
        return true;
    }
}

playto.addEventListener('change',function(){
    win=parseInt(playto.value); 
})

p1inc.addEventListener('click',function(){
    if(iswinnner(parseInt(p1score.innerText))){
        p1score.style.color="green";
        p2score.style.color="red"; 
    }else{
        increment(p1score);

    };
})

p2inc.addEventListener('click',function(){
    if(iswinnner(parseInt(p2score.innerText))){
        p1score.style.color="red";
        p2score.style.color="green"; 
    }else{
        increment(p2score);

    };
})

reset.addEventListener('click',function(){
    // p1inc.disabled="false";
    // p2inc.disabled="false";
    p1score.innerText='0';
    p2score.innerText='0';
    p1score.style.color="black";
    p2score.style.color="black";
    gameover=false;
    
    
})

