const images=document.getElementsByTagName('img');

// for(let img of images){
//     console.log(img.src)
//     console.log(img.width)
// }

// for(let ele in images){
//     console.log(images[ele]);
// }
// for(let ele of images){
//     console.log(ele.alt);
// }



let student={
    'name':{
                'firstName':'aniket',
                'lastName':'kshirsagar'
             },

    'education':{
                    'primaryEducation':{
                                                    'school':'Janata Vidya Mandir,Murud',
                                                    'tuition':{
                                                                'maths':'pheonix classes',
                                                                'english':'Dhokle classes',
                                                                'science':'Sagar classes'
                                                                }  
                                                    }
                  },
     'greet':function(name){console.log(`hello ${name} from ${this.name.firstName} ${this.name.lastName}`)}
    
}

