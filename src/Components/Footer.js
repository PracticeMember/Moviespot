import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (


    <footer className=" left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="https://flowbite.com/" className="hover:underline">Moviespot</Link>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="#" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
          <Link to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        <li>
          <Link to="#" className="hover:underline me-4 md:me-6">Licensing</Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </footer>


  )
}