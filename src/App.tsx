import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
const App = () => {
  return (
    <>
      <Routes>

        <Route path='*' element={
          <div>
            <NavBar />
            <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/' element={<Login />} />
              <Route path='/home_account/*' element={<Profile />} />
            </Routes>
          </div>
        } />

        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <footer>

      </footer>
    </>
  )
}

export default App