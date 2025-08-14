import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Auth Components
import SignUpForm from './components/auth/SignUpForm'
import LogIn from './components/auth/LogIn'
import Home from './components/Home'
import { useAuth, AuthProvider } from './components/auth/AuthProvider'

// Layout Components
import AppLayout from './components/layout/AppLayout'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function AppRoutes() {
  const { user } = useAuth()
  console.log("Current user in app.jsx:", user)
  
  if (user) {
    // User is logged in - show app with layout
    return (
      <Routes>
        <Route path='/' element={<AppLayout />}>
          {/* Default route - redirect to dashboard */}
          <Route index element={<Home />} />
          
          {/* Catch all - redirect to dashboard */}
          {/* <Route path='*' element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
    )
  } else {
    // User not logged in - show auth forms only
    return (
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUpForm />} />
        {/* Redirect any other route to login */}
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    )
  }
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  ) 
}

export default App