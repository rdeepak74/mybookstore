import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useAuth } from '../context/AuthProvider'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const [authUser, setAuthUser] = useAuth()
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }
    try {
      const res = await axios.post('http://localhost:4001/user/login', userInfo)
      if (res.data) {
        alert('Login successfully')
      }
      localStorage.setItem('user', JSON.stringify(res.data.user))
      setAuthUser(res.data.user)
      navigate('/')
    } catch (error) {
      console.error(error)
      if (error.response) {
        alert('Error: ' + error.response.data.message)
      }
    }
  }
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="modal-box  dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            {/* <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </Link> */}

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-3 ">
              <div>
                <label className="flex ">Email</label>
                <input
                  className="border mt-1 outline-none px-2 py-1 rounded-md md:w-80 dark:bg-slate-900 dark:text-white
            "
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register('email', { required: 'Email is required' })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label className="flex ">Password</label>
                <input
                  className="border mt-1 outline-none px-2 py-1 rounded-md md:w-80 dark:bg-slate-900 dark:text-white
            "
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your email"
                  {...register('password', {
                    required: 'Password is required',
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                      message:
                        'Password must include upper, lower, number, and special character',
                    },
                  })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex justify-between items-center flex-col md:flex-row ">
                <button
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                  id="login"
                >
                  Login
                </button>

                <p className="mt-2 md:mt-0">
                  Not registered?{' '}
                  <Link className="text-blue-400 hover:underline" to="/signup">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
