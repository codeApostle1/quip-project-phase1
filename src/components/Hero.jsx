import React from 'react'
import heroImage from '../assets/images/ipad-man.jpg'

const Hero = () => {
  return (
    <section className='w-full py-7 px-6 bg-white'>
        <div className='max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
            <div className='md:text-left text-center md:w-1/2 b'>
                <h1 className='text-4xl md:text-6xl font-bold  mb-6 bg-gradient-to-r from-navy via-tailwindblue to-emerald bg-clip-text text-transparent '>
                    Build Something different and see how the magic turns out
                </h1>
                <p className='text-lg md:text-xl text-gray-600 mb-8 '>
                    think, build, solve effortlessly using our modern tool
                </p>

                <button className='hover:shadow-lg hover:shadow-accent-blue bg-tailwindblue py-2 px-5 text-white md:text-2xl rounded-4xl active:bg-white border-1 border-tailwindblue active:bg-white active:text-tailwindblue'>
                    Hop In
                </button>
            </div>

            <div className='md:w-1/2  '>
                <img src={heroImage} alt="" className='w-full max-w-lg mx-auto rounded-full shadow-xl shadow-lightgreen' />
            </div>
        </div>
    </section>
  )
}

export default Hero