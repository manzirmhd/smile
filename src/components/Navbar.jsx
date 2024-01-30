import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import {FaTimes} from 'react-icons/fa';
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const[click, setClick] = useState(false);
  const handleClick = () =>   setClick(!click);

  const content = 
  <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-white transition'>
      <ul className='text-center text-xl p-20 '>
        <Link spy={true} smooth={true} to="/" className='no-underline'><li className='my-4 py-4 hover:bg-slate-800 hover:rounded text-white cursor-pointer'>Product</li></Link>
        <Link spy={true} smooth={true} to="/node_modules" className='no-underline'><li className='my-4 py-4 hover:bg-slate-800 hover:rounded text-white cursor-pointer'>Customers</li></Link>
        <Link spy={true} smooth={true} to="/" className='no-underline'><li className='my-4 py-4 hover:bg-slate-800 hover:rounded text-white cursor-pointer'>Integrations</li></Link>
        <Link spy={true} smooth={true} to="/" className='no-underline'><li className='my-4 py-4 hover:bg-slate-800 hover:rounded text-white cursor-pointer'>Learn</li></Link>
        <Link spy={true} smooth={true} to="Shopify" className='no-underline'><li className='my-4 py-4 hover:bg-slate-800 hover:rounded text-white cursor-pointer'>Pricing</li></Link>
        <li className='pb-5'><Button variant="contained">create free ACCOUNT</Button></li>
        <li><Button variant="text">Log in</Button></li>
        </ul>
        
    </div>
      
  
  return (
    <div className='bg-white '>
      <div className='h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4'>
        <div className='flex items-center flex-1'>
          <span><img src='/src/assets/logo.svg' alt='logo'/></span>
        </div>

        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 text-base uppercase '>
            <Link spy={true} smooth={true}  to="/" className='no-underline'><li className='hover:bg-gray-100 transition cursor-pointer  text-gray-900 '>Product</li></Link>
            <Link spy={true} smooth={true} to="/" className='no-underline'><li className='hover:hover:bg-gray-100 transition  cursor-pointer  text-gray-900 '>Customers</li></Link>
            <Link spy={true} smooth={true} to="/" className='no-underline'><li className='hover:hover:bg-gray-100 transition  cursor-pointer  text-gray-900 '>Integrations</li></Link>
            <Link spy={true} smooth={true} to="/" className='no-underline'><li className='hover:hover:bg-gray-100 transition  cursor-pointer  text-gray-900 '>Learn</li></Link>
            <Link spy={true} smooth={true} to="Shopify" className='no-underline'><li className='hover:hover:bg-gray-100 transition  cursor-pointer  text-gray-900 '>Pricing</li></Link> 
            </ul>
          </div>
          <div className='px-5 flex gap-3'>
        <Button variant="contained">ACCOUNT</Button>
        <Button variant="text">Log in</Button>
        </div> 
        </div>
       
        
        <div>
         {click && content}
        </div>
        <button className='block sm:hidden transition' onClick={handleClick}>{click ? <FaTimes className='text-xl'/> : <CiMenuBurger className='text-2xl font-bold'/>}</button>

      </div>
    </div>
  )
}

export default Navbar