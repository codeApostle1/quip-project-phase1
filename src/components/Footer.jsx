import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-navy text-white py-10 px-6 mt-20"'>
        <div  className="max-w-6xl mx-auto grid md:grid-cols-2 gap-1">
            <h3  className="text-3xl font-bold mb-4 text-accent-yellow">Quips</h3>
            <p>Build real solutions fast with Qips</p>

             <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-300">Quick Links</h4>
          <ul className="space-y-2">
            <li className="hover:text-neutral-gray cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>
        </div>

          <div className="text-center text-sm text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} CodeApostle. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer