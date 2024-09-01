import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Signin from './components/Signin'
import HomePage from './components/HomePage'
const App = () => {
  return (
    <Router>
    <Routes>
        <Route path='/'  element={<HomePage/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
    </Routes>

    </Router>
  )
}

export default App