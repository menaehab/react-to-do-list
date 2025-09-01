import './App.css'
import TodoList from './components/TodoList'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { TodoContextProvider } from './contexts/TodoContext'
import SnackBar from './components/SnackBar'
function App() {

  return (
    <TodoContextProvider>
      <SnackBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
        </Route>
      </Routes>
    </TodoContextProvider>
  )
}

export default App
