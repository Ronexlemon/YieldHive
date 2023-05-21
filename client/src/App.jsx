import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import DashBoard from './Pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Router>
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<LandingPage/>} path='/home'/>
        <Route element={<DashBoard/>} path='/dashboard'/>
      </Routes>
    </Router>

   
    </>
  )
}

export default App
