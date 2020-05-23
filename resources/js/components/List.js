import React, { Component} from 'react'
import {updateItem,deleteItem,addItem} from './ListFunction'
import axios from 'axios';



class List extends Component{
constructor(){
    super()
    this.state={
        id:'',
        title:'',
        editDisabled:false,
        items:[]
    }

    this.onSubmit= this.onSubmit.bind(this)
    this.onChange= this.onChange.bind(this)
}

componentDidMount(){
this.getAll()

}

onChange = event => {
this.setState({
[event.target.name]: event.target.value

})

}

getAll=()=>{

     axios.get('/api/tasks').then(res=>{

this.setState({
items:res.data
},

()=>{
console.log(this.state.items)
})

})
}


onSubmit=e=>{
e.preventDefault()
addItem(this.state.title).then(()=>{

    this.getAll()
})
this.setState({
    title:''
})

}

onUpdate=e=>{
    e.preventDefault()
    updateItem(this.state.title,this.state.id).then(()=>{

        this.getAll()
    })
    this.setState({
        title:'',
        editDisabled:''
    })
this.getAll()
    }

    onEdit =(itemid,e)=>{
        e.preventDefault()
        var data =[...this.state.items]
    data.forEach(item=>{
if(item._id===itemid){
        this.setState({
            id:item._id,
            title:item.title,
            editDisabled:true
        })
        }
    })

    }
onDelete=(val,e)=>{

e.preventDefault()
deleteItem(val)
this.getAll()

}


render() {
return(

<div>
<form onSubmit={this.onSubmit}>
<div className="form-group">
    <label htmlFor="title"> Title</label>
    <input type="text" className="form-control"

id="title"
name="title"
value={this.state.title || ''}
onChange={this.onChange.bind(this)} />

    {!this.state.editDisabled ? (
<button type="submit" className="btn btn-success btn-block"
onClick={this.onSubmit.bind(this)}>submit</button>
    ):('')}
    {this.state.editDisabled ? (
<button type="submit" className="btn btn-primary btn-block"
onClick={this.onUpdate.bind(this)}>
update</button>
 ):('')}



</div>





</form>
<div></div>
<table className="table">
<tbody>
{this.state.items.map(item=>{
<tr>
<td className="text-left">
{item.title}
</td>
<td className="text-right">
<button className="btn btn-info"
href=""
disabled={this.state.editDisabled}
onClick={this.onEdit.bind(this,item.id)}>
edit</button>
<button className="btn btn-danger"
href=""
disabled={this.state.editDisabled}
onClick={this.onDelete.bind(this,item.id)}>
delete</button>
</td>


</tr>


}



)}

</tbody>
</table>
</div>


)
}

}



export default List
