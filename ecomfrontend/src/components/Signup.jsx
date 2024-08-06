import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [authUser, setAuthUser] = useAuth()
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    try {
      const res = await axios.post(
        'https://mybookstore-jade.vercel.app/user/signup',
        userInfo
      )
      console.log(res.data)
      if (res.data) {
        // alert('Signup Success')
        toast.success('Signup Successfully')
      }
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        setAuthUser(res.data.user)
        navigate('/')
      }, 1000)
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data)
        // alert('Error: ' + error.response.data.message)
        toast.error('Error: ' + error.response.data.message)
      }
    }
  }

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="modal-box  dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link> */}
            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="mt-4 space-y-3">
              <div>
                <label className="flex ">Name</label>
                <input
                  className="border mt-1 outline-none px-2 py-1 rounded-md md:w-80 dark:bg-slate-900 dark:text-white
        "
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter your full name"
                  {...register('fullname', {
                    required: 'fullname is required',
                  })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    {errors.fullname.message}
                  </span>
                )}
              </div>
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
                  placeholder="Enter your password"
                  {...register('password', {
                    required: 'Password is required',
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                      message:
                        'Password must include upper, lower, number, and special character and atleat 8 character required',
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
                  className=" border rounded-md px-4 py-1 bg-pink-500 hover:bg-pink-700 text-white duration-300"
                  id="signup"
                >
                  Signup
                </button>

                <p className="mt-2 md:mt-0">
                  Have account?{' '}
                  <Link to="/login">
                    <button className="text-blue-400 hover:underline">
                      Login
                    </button>
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

export default Signup
