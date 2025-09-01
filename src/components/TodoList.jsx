import { useContext, useState, useMemo } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Tooltip,
  Stack
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import { TodoContext } from "../contexts/TodoContext";
export default function TodoList() {
  const [alignment, setAlignment] = useState("all");

  const handleChange = (e, newAlignment) => {
    setAlignment(newAlignment);
  };

  const { todos, setTodos } = useContext(TodoContext);
  const [editingTodo, setEditingTodo] = useState(null);

  const filteredTodos = useMemo(() => {
    switch (alignment) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'uncompleted':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [alignment, todos]);

  const handleEditClick = (todo) => {
    setEditingTodo(todo);
  };

  const handleCloseEdit = () => {
    setEditingTodo(null);
  };

  const deleteTodo = (todo) => {
    setTodos(todos.filter((value) => value.id !== todo.id));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const doneTodo = (todo) => {
    const updatedTodos = todos.map((value) => 
      value.id === todo.id ? {...value, completed: !value.completed} : value
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <>
      {/* filter Toggle Button Group */}
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className="mb-4"
        size="small"
      >
        <ToggleButton  value="all">All</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="uncompleted">Uncompleted</ToggleButton>
      </ToggleButtonGroup>

      {/* add todo */}
      <AddTodo />

      {/* todo List */}
      <List dense sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        {filteredTodos.map((item) => {
          const labelId = `checkbox-list-secondary-label-${item.id}`;
          return (
            <ListItem
              key={item.id}
              secondaryAction={
                <Stack direction="row" spacing={1}>
                  <Tooltip title="Done">
                    <IconButton edge="end" aria-label="done" size="small">
                      <DoneIcon color="success" onClick={() => doneTodo(item)}/>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Edit">
                    <IconButton 
                      edge="end" 
                      aria-label="edit" 
                      size="small"
                      onClick={() => handleEditClick(item)}
                    >
                      <EditIcon color={editingTodo ? "disabled" : "primary"} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton edge="end" aria-label="delete" size="small">
                      <DeleteIcon color="error" onClick={() => deleteTodo(item)}/>
                    </IconButton>
                  </Tooltip>
                </Stack>
              }
              disablePadding
            >
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText 
                  className="p-2" 
                  id={labelId} 
                  primary={item.name} 
                  sx={{ 
                    textDecoration: item.completed ? "line-through" : "none",
                    opacity: item.completed ? 0.7 : 1
                  }} 
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      
      {/* Edit Todo Modal */}
      <EditTodo 
        todo={editingTodo} 
        onClose={handleCloseEdit} 
      />
    </>
  );
}
