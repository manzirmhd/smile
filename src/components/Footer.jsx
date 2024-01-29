import React from 'react';
import Comp from './Comp';
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material';

function Footer() {
  return (
   <div className='bg-sky-50'>
  <div className='lg:px-16 lg:py-10 md:px-10 sm:px-5 sm:py-10 '>
    <div className='grid grid-cols-2  text-lg text-zinc-500'>
     
     <div className=''>
      <img src='/src/assets/smile.svg' alt='footer-logo' className='h-10'/>
        <div className='space-x-3 py-10 '>
        <a href='/'><Twitter fontSize='large'/></a>
        <a href='/'><Instagram fontSize='large'/></a>
        <a href='/'><Facebook fontSize='large'/></a>
        <a href='/'><LinkedIn fontSize='large'/></a>
        <a href='/'><YouTube fontSize='large'/></a>
        </div>
     </div>

     <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5'>
     <Comp
     heading="product"
     one="Points"
     two="Referrals"
     three="VIP"
     four="Rewards Panel"
     five="Admin Dashboard"
     ></Comp>

     <Comp
     heading="resources"
     one="Watch Demo"
     two="Blog"
     three="Newsletter"
     four="Learning Center"
     five="Help Docs"
     six="Status Page"
     ></Comp>

     
     <Comp
     heading="company"
     one="About Us"
     two="Join the Team"
     three="Our Partners"
     four="Contact Us"
     five="Brand Assets"
     ></Comp>
    </div>

  </div>
    </div>

    <div className='bg-sky-100 py-10 flex lg:justify-between sm:justify-center sm:flex-wrap  text-zinc-600'>
      <div className='sm:px-5 lg:px-16 '>Copyright &copy; 2024 Smile Inc. All rights reserved</div>
      <div className='space-x-5 sm:px-5 lg:px-40 text-lg '>
        <a href='/' className='hover:underline'>Terms of Service</a>
        <a href='/' className='hover:underline'>Privacy Policy</a>
        <a href='/' className='hover:underline'>Support Policy</a>
      </div>
    </div>
     
  </div>
  )
}

export default Footer