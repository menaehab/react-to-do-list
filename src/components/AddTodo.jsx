import { Button, TextField } from '@mui/material'
import React from 'react'

export default function AddTodo() {
  return (
    <div className='flex gap-2 items-center justify-center'>
      <TextField id="outlined-basic" size="small" label="Add Todo" variant="outlined" />
      <Button variant="contained">Add</Button>
    </div>
  )
}
