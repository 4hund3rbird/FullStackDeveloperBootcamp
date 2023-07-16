let a=prompt('enter a number');
a=parseInt(a);
switch(a){
    case 1:alert('one');
    default:console.log('default');
}

while(a<10){
    alert(a);
    a++;
}

do{
    alert('this is from do while loop');
}while(a<10);