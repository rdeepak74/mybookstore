import React from 'react'
import { useAuth } from '../context/AuthProvider'

function Logout() {
  const [authUser, setAuthUser] = useAuth()

  const handleLogout = () => {
    try {
      setAuthUser((prev) => ({ ...prev, user: null }))
      alert('Logout succesfully')
      localStorage.removeItem('user')
      window.location.reload()
    } catch (error) {
      alert('Error Logout' + error)
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
