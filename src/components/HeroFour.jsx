import React from 'react'
import { BsArrowRightShort } from 'react-bootstrap-icons';
import CardTwo from './CardTwo';

function HeroFour() {
  return (
    <div>
      <div className='px-20 py-20'>

        <div className="px-5">
            <CardTwo
            heading="Free"
            paragraph="$0"
            one="Reward your customers on every order"
            two="Reward for social sharing & birthdays"
            three="Offer discounts for redeeming points"
            four="Style your program to match your brand"
            />
        </div>

        <div className="px-5">
            <CardTwo
             heading="Premium"
             paragraph="$49"
             one="All features on the Free plan"
             two="Reward shoppers for referring friends"
             three="Advanced program branding"
             four="Advanced analytics"
             five="Remove Smile branding"
            />
        </div>

      </div>
      <div className='flex justify-center items-center w-screen'>
        <a href='/' className='text-lg underline text-blue-600'>View plan comparision  </a>
        <BsArrowRightShort />
    </div>

    </div>
  )
}

export default HeroFour