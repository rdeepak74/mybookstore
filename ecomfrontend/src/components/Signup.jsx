import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link>
            <h3 className="font-bold text-lg">SignUp</h3>
            <div className="mt-4 space-y-3">
              <div>
                <label className="flex ">Name</label>
                <input
                  className="border mt-1 outline-none px-2 py-1 rounded-md md:w-80
        "
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your full name"
                  {...register('username', {
                    required: 'Username is required',
                  })}
                />
                <br />
                {errors.username && (
                  <span className="text-sm text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </div>
              <div>
                <label className="flex ">Email</label>
                <input
                  className="border mt-1 outline-none px-2 py-1 rounded-md md:w-80
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
                  className="border mt-1 outline-none px-2 py-1 rounded-md md:w-80
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
                  className=" border rounded-md px-4 py-1 bg-pink-500 hover:bg-pink-700 text-white duration-300"
                  id="signup"
                >
                  Signup
                </button>

                <p className="mt-2 md:mt-0">
                  Have account?{' '}
                  <button
                    className="text-blue-400 hover:underline"
                    onClick={() =>
                      document.getElementById('my_modal_3').showModal()
                    }
                  >
                    Login
                  </button>{' '}
                  <Login />
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
