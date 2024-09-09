import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NotFound from "../assets/image.png"
export const PageNotFound = ({ title }) => {
  useEffect(() => {
    document.title = title
  })
  return (
    <section className='flex flex-col justify-center  p-4'>
      <div className='flex flex-col items-center my-4'>
        <div className='max-w-lg'>
          <img className='rounded-full' src={NotFound} alt="Page Not Found" />
        </div>
      </div>
      <div class="flex justify-center">
        <Link to="/">
          <button className='text-lg py-3 px-4 font-semibold text-gray-300 rounded-full dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Back to Moviespot</button>
        </Link>
      </div>
    </section>
  )
}
