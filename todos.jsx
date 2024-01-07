import React,{useState} from 'react';
import "./todo.css"

function Todo(){
const [newitem, set]=useState("")
const [newline, setnew]=useState([])

function add(){
    const item={
        id: Math.floor(Math.random()*1000),
        value: newitem
    }
setnew(list=>[...list,item])
set("")
    console.log(item)
}
function deleteitem(id) {
    
    const newset = newline.filter((item) => item.id !== id);
    console.log(newset)
    setnew(newset);
    
  }
return (
    <div className='todo'>
        
        <h1>Todo</h1>
        <input type="text" placeholder='Add note' value={newitem} onChange={e => set(e.target.value)} />        
        <button onClick={()=>add()}>Add </button>
        <ul>
            {newline.map(items=>{return(<li key={items.id}>{items.value}<button className='delete' onClick={()=>deleteitem(items.id)}>❌</button></li> )})}
            
        </ul>
    </div>
)
}
export default Todo