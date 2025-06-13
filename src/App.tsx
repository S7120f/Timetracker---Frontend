import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoryPage from './components/CategoryPage'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoute from './security/ProtectedRoute'


function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/category" element={
        <ProtectedRoute>
        <CategoryPage />
        </ProtectedRoute>
        }
         />
     </Routes>
    </BrowserRouter>
  )
}

export default App
