import React from 'react'
import "./Todos.css"



const Todos = ({ todoList, handleEdit, toggleTodo, handleDelete }: handleprops) => {

  return (
    <ul className='unordered-list'>
    
      {todoList.length
        ? <>
        <li key={0} style={{textAlign:'center',backgroundColor:'lightpink',listStyle:'none',color:'white'}}>Task</li>
        {todoList.map((todo:ITodo, i: number) =>
          <li key={`todo${i}`} className="list-item">
            <label className='label-input'
              style={{ textDecoration: todo.completed ? 'line-through' : undefined }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={()=>{toggleTodo(todo)}}
              />
              {todo.todo}
            </label>
            <section>
              <button onClick={()=>handleEdit(i)} className="edit-btn" title='change in plans? click here.'>Edit</button>
              <button onClick={()=>handleDelete(todo)} className="delete-btn" title='delete activity? click here.'>Delete</button>
            </section>


          </li>
        )}</>
        : <p className='noitems'> Add items to see the list.</p>
        }

    </ul>
  )
}

export default Todos