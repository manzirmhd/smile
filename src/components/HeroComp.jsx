import React from 'react'
import { Link } from 'react-router-dom'

function HeroComp() {
  return (
    <div>
        <div className='py-10 px-10'>
           <h1 className='text-5xl font-semibold text-center'>Start Your Loyalty Program today!</h1>
        <div className='pt-20  border-b-2 flex justify-center items-center w-screen'>
            <ul className='flex w-max'>
                <li className='bg-slate-100 border rounded-t-md border-gray-300'><Link to="/shopify"><div className='py-5 px-12'><img src='/src/assets/shopify.png' alt='shopify' className='h-7'/></div></Link></li>
                <li className='bg-slate-100 border rounded-t-md border-l-0 border-gray-300' ><Link to="/shopify"><div className='py-5 px-10'><img src='/src/assets/bigcom.png' alt='commerce' className='h-7'/></div></Link></li>
                <li className='bg-slate-100 border rounded-t-md border-l-0 border-gray-300'><Link to="/wix"><div className='py-5 px-20'><img src='/src/assets/wix.svg' alt='wix' className='h-7'/></div></Link></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default HeroComp