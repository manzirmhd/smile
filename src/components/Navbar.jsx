import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Shopify from '../pages/Shopify';

function Navbar() {
  return (

<nav className='static'>

<div className='h-20 bg-white'>
    <div className='py-5 px-10 flex justify-evenly'>
        <div className='py-2'>
            <img src='/src/assets/logo.svg' alt='Logo'/>
        </div>

        <div className='py-3'>
            <ul className='flex uppercase text-sm font-bold text-gray-400 '>
                <li className='px-4 hover:text-black cursor-pointer'><a href='/'>Product</a></li>
                <li className='px-4 hover:text-black cursor-pointer'><a href='/'>Customers</a></li>
                <li className='px-4 hover:text-black cursor-pointer'><a href='/'>Integrations</a></li>
                <li className='px-4 hover:text-black cursor-pointer'><a href='/'>Learn</a></li>
                <li className='px-4 hover:text-black cursor-pointer active:text-black'><Link to="shopify">Pricing</Link></li>
            </ul>
        </div>

        <div className='flex '>
        <Button variant="contained">CREATE FREE ACCOUNT</Button>
        <Button variant="text">Log in</Button>
        </div>
    </div>
</div>

</nav>

   
  )
}

export default Navbar