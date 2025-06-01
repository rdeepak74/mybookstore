import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col gap-2 justify-center items-center">
      <h2>404 Page Not Found</h2>
      <button
        className="bg-slate-200 p-2 rounded-lg"
        onClick={() => {
          navigate('/login')
        }}
      >
        Go to login
      </button>
    </div>
  )
}
