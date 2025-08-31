import './App.css'
import TodoList from './components/TodoList'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoList />} />
      </Route>
    </Routes>
  )
}

export default App
