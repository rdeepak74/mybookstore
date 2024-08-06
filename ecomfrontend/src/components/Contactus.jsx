import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Contactus() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen flex justify-center items-center">
        <div className="">
          <h1 className="text-xl font-semibold">Contact Us</h1>
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
              />
            </div>
            <div>
              <label className="flex ">Email</label>
              <input
                className="border mt-1 outline-none px-2 py-1 rounded-md md:w-80"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <br />
            </div>
            <div>
              <label className="flex ">Message</label>
              <textarea
                name=""
                id=""
                rows="4"
                cols="25"
                className="border mt-1 outline-none px-2 py-1  rounded-md md:w-80"
                placeholder="Type your message"
              ></textarea>
            </div>
            <div className="flex justify-between items-center flex-col md:flex-row ">
              <button
                className=" border rounded-md px-4 py-1 bg-pink-500 hover:bg-pink-700 text-white duration-300"
                id="signup"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Contactus
