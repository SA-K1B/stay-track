import { useState } from 'react'
import './App.css'

// Auth Components
import SignUpForm from './components/auth/SignUpForm'
import LogIn from './components/auth/LogIn'
import Home from './components/Home'
import RoomManagement from './components/admin/roomManagement'
import { useAuth, AuthProvider } from './components/auth/AuthProvider'

// Layout Components
import AppLayout from './components/layout/AppLayout'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function AppRoutes() {
  const { user, loading } = useAuth() // Make sure AuthProvider returns loading
  console.log("Current user in app.jsx:", user)
  console.log("Loading state:", loading)
  
  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-lg text-gray-600">Loading Stay Track...</p>
        </div>
      </div>
    )
  }
  
  if (user) {
    // User is logged in - show app with layout
    return (
      <Routes>
        <Route path='/' element={<AppLayout />}>
          {/* Default route - show Home */}
          <Route index element={<Home />} />
          
          {/* Admin routes */}
          <Route path='rooms' element={<RoomManagement/>}/> {/* Fixed: no leading slash */}
          <Route path='staff' element={<div className="p-6"><h1 className="text-2xl font-bold">Staff Management</h1><p>Coming soon...</p></div>}/>
          <Route path='settings' element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p>Coming soon...</p></div>}/>
          
          {/* Catch all - redirect to home */}
          <Route path='*' element={<Navigate to="/" />} />
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