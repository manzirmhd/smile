import React from 'react'
import CardShop from './CardShop'

function HeroTwo() {
  return (
  <div className='px-5 py-14 grid lg:grid-cols-3 bg-sky-50 w-screeen'>

    <div>
        <CardShop
        heading= "Starter"
        paragraph_one="$49"
        paragraph="Everything you need to create an on-brand program your customers will love."
        paragraph_two="Up to 500 monthly orders 
        $5 per additional 100 orders"
        >
        </CardShop>
    </div>

    <div>
        <CardShop
        heading= "Growth"
        paragraph_one="$199"
        paragraph="Level up your loyalty program with extras like free product rewards and VIP tiers."
        paragraph_two="Up to 2,500 monthly orders
        $20 per additional 100 orders"
        >
        </CardShop>
    </div>

    <div>
        <CardShop
        heading= "Plus"
        paragraph_one="$999"
        paragraph="Get the best of Smile with more customization options and the data access your team needs."
        paragraph_two="Up to 7,500 monthly orders
        $5 per additional 100 orders"
        >
        </CardShop>
    </div>

    <div className='flex justify-center items-center w-screen'>
        <a href='/' className='text-lg underline text-blue-600'>View plan comparision  </a>
    </div>
  </div>
  )
}

export default HeroTwo