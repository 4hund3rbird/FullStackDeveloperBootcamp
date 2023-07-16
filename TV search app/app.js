const query=document.getElementById('query');
const searchbtn=document.getElementById('searchbtn');
const search=document.getElementById('search');
// const poster=document.getElementById('poster');
var movie='';

let api="https://api.tvmaze.com/search/shows?q=";

const getdata=async(q)=>{
    try{    
        let data=await axios.get(api+q);
        return data.data;
    }catch(e){
        console.log("sorry");
    }
}

const make_img=(shows)=>{
    for(let i of shows){
        if(i.show.image){z
        // {console.log(i.show.url)
        let poster=document.createElement('img');
        poster.src=i.show.image.medium;
        document.body.append(poster);}
    }
}


search.addEventListener('submit',async(evt)=>{
    evt.preventDefault();
    movie=query.value;
    let imgsrc=await getdata(movie);
    // console.log(imgsrc);
    make_img(imgsrc);
    query.value='';
})