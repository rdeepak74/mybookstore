import React, { useEffect, useState } from 'react'
import Crads from './Crads'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Courselist() {
  const [list, setList] = useState([])

  useEffect(() => {
    const getlist = async () => {
      try {
        const res = await axios.get('https://mybookstore-jade.vercel.app/book')
        // console.log(res.data)
        setList(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getlist()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have youd{' '}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            debitis minus. Vitae culpa praesentium similique impedit modi
            blanditiis magnam quod amet molestias quo corrupti maiores harum
            illum, architecto, distinctio obcaecati.
          </p>
          <Link to="/">
            <button className="mt-12 border rounded-md px-4 py-2 bg-pink-500 hover:bg-pink-700 text-white duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid gird-cols-1 md:grid-cols-4 gap-4">
          {list.map((book) => (
            <Crads
              key={book.id}
              title={book.title}
              image={book.image}
              price={book.price}
              name={book.name}
              category={book.category}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courselist
