import React from 'react'
import Home from './home/Home'
import { Outlet, Route, Routes } from 'react-router-dom'
import Course from './course/Course'
import Signup from './components/Signup'
import Contactus from './components/Contactus'
import About from './components/About'

function App() {
  return (
    <>
      <div className="dark:bg-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {/* <Navbar />
      <div className="dark:bg-slate-800 dark:text-white">
        <Outlet />
      </div>
      <Footer /> */}
    </>
  )
}

export default App
