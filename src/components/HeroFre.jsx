import React from 'react'
import BoxComp from './BoxComp'

function HeroFre() {
  return (
    <div className='py-1'>
        <div className='pb-10'><h1 className='text-4xl font-bold text-center'>Frequently asked questions</h1></div>
        <BoxComp paragraph="What ecommerce platforms can I install Smile on?"/>
        <BoxComp paragraph="Do you price based on orders?"/>
        <BoxComp paragraph="Are there any restrictions on the Free plan?"/>
        <BoxComp paragraph="How are monthly orders calculated?"/>
        <BoxComp paragraph="What currency am I billed in?"/>
        <BoxComp paragraph="How do overages work?"/>
        <BoxComp paragraph="Does Shopify/BigCommerce count as an integration?"/>
        <BoxComp paragraph="Can customers earn/redeem points in-store through my point-of-sale (POS) system?"/>
        <BoxComp paragraph="Can I move an existing program to Smile?"/>
        <BoxComp paragraph="Do I have to run all types of programs including points, referral and VIP?"/>
        <BoxComp paragraph="I have multiple stores. Do you have any deals for subscribing to Smile on all my stores?"/>
        <BoxComp paragraph="What can I do with API access?"/>
    </div>
  )
}

export default HeroFre