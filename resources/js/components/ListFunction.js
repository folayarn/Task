import axios from 'axios';




export const addItem=title=>{
 return axios
 .post('api/tasks',{

title:title

 },{
header:{'content-type':'application/json'}

 }).then(res=>{
console.log(res)

 })
}

export const deleteItem =id=>{

return axios
.delete('api/tasks/${id}',
{header:{'content-type':'application/json'}
}).then(res=>{

console.log(res)
}).catch(err=>{
    console.log(err)
})
}

export const updateItem =(title,id)=>{

    return axios
    .put('api/tasks/${id}',
    {
        header:{'content-type':'application/json'}
    })
    .then(res=>{

    console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
    }

