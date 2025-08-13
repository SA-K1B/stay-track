import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpForm from './components/auth/SignUpForm'
import LogIn from './components/auth/LogIn'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import { useAuth, AuthProvider } from './components/auth/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function AppRoutes() {
  const {user} = useAuth()
  console.log("Current user in app.jsx:",user)
  if(user){
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
    </>
  )
}
else{
  return (
    <Routes>
      <Route path='/' element={<LogIn/>} />
      <Route path='/signup' element={<SignUpForm />} />
    </Routes>
  )
}

}

function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </AuthProvider>
  ) 
}

export default App
