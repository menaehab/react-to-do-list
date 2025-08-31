import { Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext';
export default function AddTodo() {
  const [todo, setTodo] = useState('');
  const {todos, setTodos} = useContext(TodoContext);
  const AddTodo = () => {
      if(todo){
        setTodos([...todos, {id:Date.now(),name:todo,completed:false}]);
        localStorage.setItem("todos", todos);
        setTodo('');
      }
  }
  return (
    <div className='flex gap-2 items-center justify-center'>
      <TextField value={todo} onChange={(e) => setTodo(e.target.value)} id="outlined-basic" size="small" label="Add Todo" variant="outlined" />
      <Button onClick={AddTodo} variant="contained">Add</Button>
    </div>
  )
}
