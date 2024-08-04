import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-3">
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
      </dialog>
    </div>
  )
}

export default Login
