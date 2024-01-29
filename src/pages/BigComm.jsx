import React from 'react'
import Navbar from '../components/Navbar'
import HeroComp from '../components/HeroComp'
import HeroTwo from '../components/HeroTwo'
import HeroThree from '../components/HeroThree'
import BrandsComp from '../components/BrandsComp'
import HeroFre from '../components/HeroFre'
import Customer from '../components/Customer'
import Footer from '../components/Footer'


function BigComm() {
  return (
    <div>
     <Navbar/>
     <HeroComp/>
     <HeroTwo/>
     <HeroThree/>
     <BrandsComp/>
     <HeroFre/>
     <Customer/>
     <Footer/>
    </div>
  )
}

export default BigComm