class Post{
    constructor(username,likes,comments,content){
        this.username=username;
        this.likes=likes;
        this.comments=comments;
        this.content=content;
    }
}

class R_post{
    constructor(){
        this.user=this.gen_user();
        this.likes=this.gen_likes();
        this.comments=this.gen_comments();
        this.content=this.gen_content();
    };

    gen_user(){
        let txt= Array.from(Array(26), (e, i) => String.fromCharCode(i + 97));
        let user="";
        for(let i=0;i<8;i++){
            let index=Math.floor((Math.random()*10)+1);
            user+=txt[index];            
        }
        return user;
    };

    gen_likes(){
        return Math.floor((Math.random()*1000)+1);
    };
    gen_comments(){
        return Math.floor((Math.random()*1000)+1);
    };
    gen_content(){
        let list=['text','img','video','audio'];
        return list[Math.floor((Math.random()*4)+1)-1];
    }
}
posts=[];
for(let i=0;i<100;i++){
    let r_post=new R_post();
    // console.log(r_post.user,r_post.likes,r_post.comments,r_post.content);
    let post=new Post(r_post.user,r_post.likes,r_post.comments,r_post.content);
    posts.push(post);
}
console.log(posts);