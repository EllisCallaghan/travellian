import React from 'react'
import Newsletter from './Newsletter/Newsletter'
import { facebook, instagram, logo, pinterest, twitter } from '../images'

const Footer = () => {
  return (
    <div className='max-h-[577px] md:max-h-none flex flex-col items-center pt-[240px] pb-[140px] md:pb-0 px-[182px] sm:px-0 md:py-0 bg-secondary'>
        <Newsletter className={`translate-y-[-356px] md:translate-y-0 md:w-[100vw] md:flex md:justify-center md:bg-white`}/>
        <div className='translate-y-[-356px] md:translate-y-0 mt-[117px] md:mt-0 flex w-[1556px] xl:w-[1376px] lg:w-[1088px] md:w-[704px] sm:w-[288px]
        md:pt-[100px] sm:pt-[80px] md:pb-[140px] sm:pb-[80px] md:gap-[60px] flex-row md:flex-col justify-between'>
            <div className='flex flex-col items-start gap-[16px]'>
               <img src={logo} className='w-[234px] h-[45.61px]'/> 
               <p className='text-white text-left text-[14px] leading-[17px] sm:leading-[16.5px]'>Copyright © Travellian 2020 All rights<br className='hidden sm:block'/> reserved</p>
            </div>
            <div className='flex flex-col items-start gap-[16px]'>
                <h1 className='text-[24px] font-[500] leading-[28.44px] text-white'>Menu</h1>
                <div className='text-[18px] font-[400] leading-[21.33px] flex flex-col items-start gap-[12px] text-white'>
                    <a href='/'>Home</a>
                    <a href='/'>Explore</a>
                    <a href='/'>Travel</a>
                    <a href='/'>Blog</a>
                    <a href='/'>Pricing</a>
                </div>
            </div>
            <div className='flex flex-col items-start gap-[16px]'>
                <h1 className='text-[24px] font-[500] leading-[28.44px] text-white'>Information</h1>
                <div className='text-[18px] font-[400] leading-[21.33px] flex flex-col items-start gap-[12px] text-white'>
                    <a href='/'>Destinations</a>
                    <a href='/'>Supports</a>
                    <a href='/'>Terms & Conditions</a>
                    <a href='/'>Privacy</a>
                </div>
            </div>
            <div className='flex flex-col items-start gap-[16px]'>
                <h1 className='text-[24px] font-[500] leading-[28.44px] text-white'>Contact Info</h1>
                <div className='text-[18px] font-[400] leading-[21.33px] flex flex-col items-start gap-[12px] text-white'>
                    <p>+123 456 789</p>
                    <p>info@travellian.com</p>
                    <p>1245,New York, USA</p>
                </div>
            </div>
            <div className='flex flex-col items-start gap-[16px]'>
                <h1 className='text-[24px] font-[500] leading-[28.44px] text-white'>Follow Us On</h1>
                <div className='text-[18px] font-[400] leading-[21.33px] flex flex-row items-start gap-[24px] text-white'>
                    <img className='w-[32px] h-[32px]' src={facebook}/>
                    <img className='w-[32px] h-[32px]' src={pinterest}/>
                    <img className='w-[32px] h-[32px]' src={instagram}/>
                    <img className='w-[32px] h-[32px]' src={twitter}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer