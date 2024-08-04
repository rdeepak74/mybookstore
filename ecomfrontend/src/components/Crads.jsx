import React from 'react'

function Crads({ name, title, price, image, category }) {
  return (
    <div className="mt-4 my-3 p-4 ">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-300 cursor-pointer dark:bg-slate-800 dark:text-white dark:border">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${price}</div>
            <div className="badge badge-outline px-3 py-3 hover:bg-pink-500 hover:text-white duration-300 cursor-pointer">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crads
