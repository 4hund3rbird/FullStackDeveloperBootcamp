const canvas =document.querySelector('canvas');
const c=canvas.getContext('2d');
const gravity=0.2;

class sprite{
    constructor({position,velocity}){
        this.position=position;
        this.velocity=velocity;
        this.height=35;
        this.width=15;
        console.log(this.position);
        this.draw();
    }

    draw(){
        c.fillStyle="green";
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    jump(){
        this.draw();
        this.velocity.y-=gravity;
        if(this.position.y<=canvas.height-(2*this.height)){
            this.velocity.y=0;
            this.update();
        }
    }

    update(){
        this.draw();
        this.position.y+=this.velocity.y;
        if(this.position.y+this.height>=canvas.height){
            this.velocity.y=0;
        }else{
        this.velocity.y+=gravity;

        }
        }
}



let player=new sprite({
    position:{
    x:10,
    y:10
    },
    velocity:{
        x:0,
        y:5,
        d:'-'
    }
})

let enemy=new sprite({
    position:{
    x:100,
    y:10
    },
    velocity:{
        x:0,
        y:5
    }
})

function animate(){
    c.clearRect(0,0,canvas.width,canvas.height);

    window.requestAnimationFrame(animate); //continuous animating loop
    
    // enemy.update();
    // player.update();
    player.jump();
}

window.addEventListener('keydown',(e)=>{
    if(e.key===' '){
        animate();
    }
})

