import React from 'react'
import { Menu } from 'lucide-react';
// import '../index.css'

const NavBar = () => {
  return (
    <nav className='w-full px-6 bg-white shadow-md px-6 py-4 sticky top-0 z-50'>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Qips</h1>

            <ul className='hidden md:flex gap-6 even:border-r-4 even:border-accent-coral text-[18px] md:block'>
                <li className='text-darkgreen odd:border-r-4 odd:border-accent-coral px-5  nav-bottom-effect'>Home</li>
                <li className='border-r-4 border-accent-coral px-5 nav-bottom-effect'>About</li>
                <li className='border-r-4 border-accent-coral px-5 nav-bottom-effect'>Contact</li>
            </ul>

            <button className='text-tailwindblue block md:hidden '>
              <Menu  />
            </button>
            
        </div>
    </nav>
  )
}

export default NavBar