import React from 'react'

function Comp(props) {
    const {heading, one, two, three, four, five, six} = props
  return (
    

<div>
      <h1 className='text-lg uppercase font-medium text-zinc-500 pb-4'>{heading}</h1>
      <ul className='space-y-2'>
        <li ><a href='/' className='hover:underline cursor-pointer'>{one}</a></li>
        <li><a href='/' className='hover:underline cursor-pointer'>{two}</a></li>
        <li><a href='/' className='hover:underline cursor-pointer'>{three}</a></li>
        <li><a href='/' className='hover:underline cursor-pointer'>{four}</a></li>
        <li><a href='/' className='hover:underline cursor-pointer'>{five}</a></li>
        <li><a href='/' className='hover:underline cursor-pointer'>{six}</a></li>
      </ul>
</div>


  )
}

export default Comp