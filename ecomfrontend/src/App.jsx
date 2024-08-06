import React from 'react'
import Home from './home/Home'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Course from './course/Course'
import Signup from './components/Signup'
import Contactus from './components/Contactus'
import About from './components/About'
import { useAuth } from './context/AuthProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  const [authUser, setAuthUser] = useAuth()
  return (
    <>
      {/* <div className="dark:bg-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Course /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div> */}
      <Navbar />
      <div className="dark:bg-slate-800 dark:text-white">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
