import React from 'react'

function HeroThree() {
  return (
    <div className='flex flex-wrap justify-center items-center px-20 py-20'>

        <div className='px-5 w-96 lg:pr-10  lg:border-r '>
            <h1 className='text-lg font-bold text-black text-left pb-6'>New Business?</h1>
            <p className='text-lg text-gray-400 text-left pb-4'>Our Free plan helps new entrepreneurs get started with a rewards program</p>
            <a href='/' className='text-lg text-blue-600 underline text-left'>Get started free</a>
        </div>
        
        <div className='px-5 w-96 lg:border-r lg:pl-10'>
            <h1 className='text-lg font-bold text-black text-left pb-6'>Have  Questions?</h1>
            <p className='text-lg  text-gray-400 text-left pb-4'>Check out our Frequently Asked Questions below.</p>
            <a href='/' className='text-lg text-blue-600 underline text-left'>See FAQs</a>
          </div>
        
        <div className='px-5 w-96 lg:pl-10 '>
            <h1 className='text-lg font-bold text-black text-left pb-6'>20k+ monthly orders??</h1>
            <p className='text-lg text-gray-400 text-left pb-4'>Let’s chat about pricing for high-volume stores</p>
            <a href='/' className='text-lg text-blue-600 underline text-left'>Book a call</a>
        </div>
        
    </div>
  )
}

export default HeroThree
       
  