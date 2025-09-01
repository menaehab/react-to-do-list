import { Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext';

export default function AddTodo() {
  const [todo, setTodo] = useState('');
  const { todos, setTodos, showSnackbar } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (todo) {
      const newTodo = { id: Date.now(), name: todo, completed: false };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodo('');
      showSnackbar('Added successfully');
    }
  };

  return (
    <div className='flex gap-2 items-center justify-center'>
      <TextField value={todo} onChange={(e) => setTodo(e.target.value)} id="outlined-basic" size="small" label="Add Todo" variant="outlined" />
      <Button onClick={handleAddTodo} variant="contained">Add</Button>
    </div>
  );
}
