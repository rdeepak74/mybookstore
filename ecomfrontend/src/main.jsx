import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './home/Home.jsx'
import Course from './course/Course.jsx'
import Signup from './components/Signup.jsx'
import AuthProvider from './context/AuthProvider.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/course',
//         element: <Course />,
//       },
//       {
//         path: '/signup',
//         element: <Signup />,
//       },
//     ],
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  // </React.StrictMode>
  // <React.StrictMode>
  //   <div className="">
  //     <RouterProvider router={router} />
  //   </div>
  // </React.StrictMode>
)
