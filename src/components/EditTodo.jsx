import { useState, useContext, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { TodoContext } from "../contexts/TodoContext";

export default function EditTodo({ todo, onClose }) {
  const { todos, setTodos } = useContext(TodoContext);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    if (todo) setEditedText(todo.name);
  }, [todo]);

  if (!todo) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editedText.trim()) return;

    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...t, name: editedText } : t))
    );
    onClose();
  };

  return (
    <Dialog open={!!todo} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{ display: "flex", alignItems: "center", gap: 1, pr: 5 }}
      >
        <EditIcon color="primary" />
        <Typography variant="h6">Edit Todo</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="Todo text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={!editedText.trim()}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
