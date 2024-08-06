import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen flex flex-col mt-28 md:mt-0 justify-center items-center space-y-4">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="w-[80%]" style={{ marginBottom: '20px' }}>
          Welcome to <span>Shopy Book Store</span>, where the world of books
          comes alive. Established in 2024, our store is a haven for book
          enthusiasts and curious minds alike. We offer a thoughtfully curated
          selection of books, spanning genres from literary fiction and
          non-fiction to children's literature and rare editions. Our mission is
          to connect readers with the stories that resonate with them, offering
          a welcoming space where everyone can explore new ideas and discover
          new favorites. At <span>Shopy Book Store</span>, we believe in the
          power of books to inspire and educate, and we're committed to
          fostering a love for reading within our community. Whether you're
          looking for the latest bestseller, a classic novel, or a unique gift,
          our knowledgeable staff is here to help you find exactly what you're
          searching for. Visit us at [address] and experience the warm and
          inviting atmosphere of our store, or browse our collection online at
          www.shopystore.com. We look forward to welcoming you!
        </p>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default About
