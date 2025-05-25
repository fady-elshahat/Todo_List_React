import React, { useState} from 'react'

function TodoForm({addTodo }) {
     const [ task, setTask ] = useState( '' )
     
     const handelSubmit = (e) => {
          e.preventDefault();         
          addTodo(task);
          setTask('')
     }

  return (
       <form className='TodoForm' onSubmit={handelSubmit}>
            <input type="text" className='todo-input' value={task} onChange={(e)=> setTask(e.target.value)} placeholder='What is The Task Todat ?' />
            <button className='todo-btn' type='submit'>Add Task</button>
     </form>
  )
}



export default TodoForm