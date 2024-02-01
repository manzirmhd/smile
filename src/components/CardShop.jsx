import React from 'react'
import Button from '@mui/material/Button';


function CardShop (props) {
    const {heading, paragraphOne, paragraph, paragraphTwo} = props
  return (
    <div className='flex justify-center items-center pb-10'>
      <div className="max-w-sm h-auto rounded overflow-hidden shadow-lg bg-white border border-gray-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-6">{heading}</div>
        <div className='flex'>
        <p className="text-black text-3xl font-bold mb-1">{paragraphOne}</p>
        <p className="text-gray-700 text-base">/month</p>
        </div>
        <p className="text-gray-700 text-xs mb-5 w-40">{paragraphTwo}</p>
        <p className="text-gray-700 text-xl mb-2">{paragraph}</p>
      </div>
      <div className="px-6 py-4 mb-3">
      <Button variant="outlined" className='px-28 py-3'>Get started</Button>
      </div>
    </div>
    </div>
  )
}

export default CardShop