import React from 'react'
import rocket from '../assets/images/rocket2.png'
import charger from '../assets/images/charger.jpg'
import leaf from '../assets/images/tech-leaf.png'

const features = [
    {title: 'The Geek Pot',
        image: rocket,
        desc: 'The web just bumped 2X faster'
    },

     {title: 'Bolt X-Y',
        image: charger,
        desc: 'Check out quick response utilities for moon flight'
    },

     {title: 'Mango Series',
        image: leaf,
        desc: 'Agricultural shifts with all derivatives'
    },
]

const Features = () => {
  return (
    <section className='w-full bg-white py-16 px-6'>
        <div className='max-w-6xl mx-auto   text-center mb-16'>
            <h2 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-darkgreen via-accent-blue to-black bg-clip-text text-transparent'>
                Why Choose Quips?
            </h2>
            <p className='mt-4 text-gray-400 text-lg'>
                Heres what makes our Web powerful and effective
            </p>
        </div>

        <div className='max-w-6xl gap-4  mx-auto grid  md:grid-cols-3 text-center'>
            {features.map((feature,index)=>(
                <div key={index} 
                className = 'rounded-2xl p-8 shadow-md shadow-emerald hover:shadow-xl transition cursor-pointer'>
                    <h3 className='text-xl md:text-4xl font-bold text-darkgreen  mb-2'>{feature.title}</h3>
                    <img src={feature.image} alt=""
                    className='w-50 h-50 mx-auto mb-4 object-contain  ' 
                    />

                    <p className='text-grey-600'>
                        {feature.desc}
                    </p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Features