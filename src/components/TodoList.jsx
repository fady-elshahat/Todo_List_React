import React , {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import TodoForm from "./TodoForm"
import { Todo } from './Todo';
import EditTodoForm from './EditTodoForm';

uuidv4()
function TodoList() {

     
     const [ todos, setTodos ] = useState( [] );
     const addTodo = (todo) => {
          setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
          ] );
          
     }
     
     
     const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
     const editTodo = (id) => {
          setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
          );
        };
     const editTask = (task, id) => {
          setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
          );
     };
     
     const toggleComplete = (id) => {
          setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          );
        }
  return (
     <div className="TodoWrapper">
          <h1>Get Things Done !</h1>
            <TodoForm addTodo={ addTodo } />
                {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
     </div>
  )
}

export default TodoList