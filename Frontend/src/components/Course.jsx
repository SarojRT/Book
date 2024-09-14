import React from 'react'
import list from '../../public/list.json'
import Cards from './cards'
import {Link } from 'react-router-dom'

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-5 flex flex-col '>
        <div className='mt-24 items-center text-center justify-center'>
          <h1 className='text-2xl md:text-4xl'>Welcome to Our <span className='text-pink-500'>Courses</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum at porro exercitationem eius maxime, non, placeat eligendi necessitatibus accusamus dolore ab ratione, aperiam minus deleniti iusto nisi maiores voluptas incidunt.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum at porro exercitationem eius maxime, non.
          </p>
          <Link to='/'>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-5'>
              Back
            </button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course