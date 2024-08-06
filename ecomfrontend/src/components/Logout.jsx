import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Logout() {
  const [authUser, setAuthUser] = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    try {
      // alert('Logout succesfully')
      toast.success('Logout Successfully')
      setTimeout(() => {
        localStorage.removeItem('user')
        // setAuthUser((prev) => ({ ...prev, user: null }))
        setAuthUser(null)
        navigate('/')
      }, 1000)

      // window.location.reload()
    } catch (error) {
      // alert('Error Logout' + error)
      toast.error('Error Logout: ' + error)
    }
  }
  return (
    <button
      className=" bg-red-500 text-white px-3 py-2 rounded-md hover:bg-slate-700 duration-300 cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default Logout
