let todolist=[]
let msg ='Enter command in the following window'
while(true){
    let command=prompt(msg)
    if(command=='new'){
        let task=prompt('Enter your task')
        todolist.push(task);
    }else if(command=='list'){
        console.log('********************')
        for(let i=0;i<todolist.length;i++){
            console.log(`${i} : ${todolist[i]}`)
        }
        console.log('********************')
    }else if(command=='delete'){
        let deleteIndex=prompt('Enter index of the task to delete')
        todolist.pop(todolist[deleteIndex])
    }else if(command=='quit'){
        console.log('You have quit the app')
        break;
    }
}