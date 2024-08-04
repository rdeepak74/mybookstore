import React from 'react'
import list from '../../public/list.json'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Crads from './Crads'

function Freebook() {
  const freeBookData = list.filter((data) => data.category === 'Free')
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="text-xl font-semibold pb-2">Free Offered Coureses</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            earum soluta. Exercitationem cum minima ullam! Nemo blanditiis
            labore tempora expedita distinctio nobis quis vel dicta quidem,
            nostrum accusantium voluptates libero!
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {freeBookData.map((book) => (
              <Crads
                key={book.id}
                title={book.title}
                image={book.image}
                price={book.price}
                name={book.name}
                category={book.category}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook
