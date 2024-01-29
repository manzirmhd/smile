import React from 'react'

function BrandsComp() {
  return (
    <div className='bg-blue-50'>
        <div className='px-5 py-20'>
            <h1 className='text-4xl font-semibold text-center lg:px-72 sm:px-10 w-screen'>Powering over 100,000 reward programs for brands around the world.</h1>
            <div className='flex flex-wrap justify-center items-center py-10'>
                 <img src='/src/assets/polarid.svg' alt='brands' />
                 <img src='/src/assets/topps.svg' alt='brands' className='px-5'/>
                 <img src='/src/assets/mondy.svg' alt='brands' className=' w-60 '/>

            </div>
        </div>
    </div>
  )
}

export default BrandsComp