import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [snackbar, setSnackbar] = useState({ open: false });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const showSnackbar = (message) => {
    setSnackbar({ open: true, message });
  };

  const hideSnackbar = () => {
    setSnackbar({ open: false });
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, snackbar, showSnackbar, hideSnackbar }}>
      {children}
    </TodoContext.Provider>
  );
}
