import React, { useState } from 'react';
 import "./todo.css"

function App() {
  const [newitem, set] = useState("")
  const [newline, setnew] = useState([])
  const [edititem, setedit] = useState(null)

  function add() {
    if (edititem !== null) {      
      const updatedlist = newline.map(item => {
        if (item.id === edititem) {
          return { ...item, value: newitem }
        }
        return item
      })
      setnew(updatedlist)
      setedit(null)
    } else {
      
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newitem
      }
      setnew(list => [...list, item])
    }
    set("")
  }

  function deleteitem(id) {
    const newset = newline.filter((item) => item.id !== id)
    setnew(newset)
    setedit(null)
  }

  function editItem(id) {
    const itemToEdit = newline.find(item => item.id === id)
    setedit(id)
    set(itemToEdit.value)
  }

  return (
    <div className='todo'>
      <h1>Todo</h1>
      <input type="text" placeholder='Add note' value={newitem} onChange={e => set(e.target.value)} />
      <button onClick={() => add()}>{edititem !== null ? "Update" : "Add"}</button>
      <ul>
        {newline.map(items => (
          <li key={items.id}>
            {items.value}
            <button className='delete' onClick={() => deleteitem(items.id)}>❌</button>
            <button className='edit' onClick={() => editItem(items.id)}>✎</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
