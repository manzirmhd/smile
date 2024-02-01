import React from 'react'
import { Link } from 'react-router-dom'

function Comp(props) {
    const {heading, one, two, three, four, five, six} = props
  return (
<div>
      <h1 className='text-lg uppercase font-medium text-zinc-500 pb-4'>{heading}</h1>
      <ul className='space-y-2'>
        <li ><Link to="/" className='hover:underline cursor-pointer'>{one}</Link></li>
        <li><Link to="/" className='hover:underline cursor-pointer'>{two}</Link></li>
        <li><Link to="/" className='hover:underline cursor-pointer'>{three}</Link></li>
        <li><Link to="/" className='hover:underline cursor-pointer'>{four}</Link></li>
        <li><Link to="/" className='hover:underline cursor-pointer'>{five}</Link></li>
        <li><Link to="/" className='hover:underline cursor-pointer'>{six}</Link></li>
      </ul>
</div>
  )
}

export default Comp