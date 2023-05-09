import React from 'react'
import { bgImage } from '../images'
import Navbar from './Navbar'
import HeroText from './HeroText'
import CTA from './CTA'
const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-bottom md:bg-left">
      <div className='flex max-w-[100vw] flex-wrap gap-[170px] md:gap-[100px] pb-[270px] lg:pb-[150px] bg-black/50 xl:bg-black/30 lg:bg-none'>
        <Navbar/>
        <HeroText/>
        <CTA/>
        </div>
    </div>
  )
}

export default Hero