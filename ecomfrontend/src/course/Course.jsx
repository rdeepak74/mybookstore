import React from 'react'
import Courselist from '../components/Courselist'
import list from '../../public/list.json'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Course() {
  const bookslist = list
  return (
    <>
      <Navbar />
      <Courselist list={list} />
      <Footer />
    </>
  )
}

export default Course
