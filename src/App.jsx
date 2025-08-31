import './App.css'
import TodoList from './components/TodoList'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { TodoContextProvider } from './contexts/TodoContext'
function App() {

  return (
    <TodoContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoList />} />
      </Route>
    </Routes>
    </TodoContextProvider>
  )
}

export default App
