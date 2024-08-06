import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom'
import Home from './home/Home.jsx'
import Course from './course/Course.jsx'
import Signup from './components/Signup.jsx'
import AuthProvider, { useAuth } from './context/AuthProvider.jsx'
import Contactus from './components/Contactus.jsx'
import About from './components/About.jsx'
import Login from './components/Login.jsx'
// const [authUser, setAuthUser] = useAuth()
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
//         element: authUser ? <Course /> : <Navigate to="/signup" />,
//       },
//       {
//         path: '/contact-us',
//         element: <Contactus />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/login',
//         element: <Login />,
//       },
//       {
//         path: '/signup',
//         element: <Signup />,
//       },
//     ],
//   },
// ])

function AppRoutes() {
  const [authUser] = useAuth() // Use useAuth hook inside a functional component

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/course',
          element: authUser ? <Course /> : <Navigate to="/signup" />,
        },
        {
          path: '/contact-us',
          element: <Contactus />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <BrowserRouter>
  //   <AuthProvider>
  //     <App />
  //   </AuthProvider>
  // </BrowserRouter>
  // </React.StrictMode>
  // <React.StrictMode>
  //   <div className="">
  //     <AuthProvider>
  //       <RouterProvider router={router} />
  //     </AuthProvider>
  //   </div>
  // </React.StrictMode>
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>
)
